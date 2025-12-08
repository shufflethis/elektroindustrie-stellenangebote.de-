import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { Mic, MicOff, Activity, X } from 'lucide-react';
import { AI_INSTRUCTION } from '../constants';
import { createBlob, decode, decodeAudioData } from '../utils/audioUtils';

const VoiceAssistant: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Audio Context Refs
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const inputNodeRef = useRef<ScriptProcessorNode | null>(null);
  const outputNodeRef = useRef<GainNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  
  // Logic Refs
  const nextStartTimeRef = useRef<number>(0);
  const sessionPromiseRef = useRef<Promise<any> | null>(null);

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  useEffect(() => {
    // Check permission on mount (optional, mostly for UI state)
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => setHasPermission(true))
      .catch(() => setHasPermission(false));
      
    return () => {
      stopSession();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startSession = async () => {
    setError(null);
    setIsConnecting(true);

    try {
      // 1. Setup Audio Contexts
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      inputAudioContextRef.current = new AudioContextClass({ sampleRate: 16000 });
      outputAudioContextRef.current = new AudioContextClass({ sampleRate: 24000 });

      // 2. Setup Output Node
      outputNodeRef.current = outputAudioContextRef.current.createGain();
      outputNodeRef.current.connect(outputAudioContextRef.current.destination);

      // 3. Get Microphone Stream
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      // 4. Connect to Gemini Live
      sessionPromiseRef.current = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            console.log('Gemini Live Connected');
            setIsConnecting(false);
            setIsActive(true);
            setupAudioInput(stream);
          },
          onmessage: async (message: LiveServerMessage) => {
            await handleServerMessage(message);
          },
          onclose: () => {
            console.log('Gemini Live Closed');
            stopSession();
          },
          onerror: (e) => {
            console.error('Gemini Live Error', e);
            setError("Verbindungsfehler. Bitte versuchen Sie es erneut.");
            stopSession();
          },
        },
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: AI_INSTRUCTION,
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
          },
        },
      });

    } catch (err) {
      console.error(err);
      setError("Zugriff auf Mikrofon verweigert oder Fehler beim Starten.");
      setIsConnecting(false);
    }
  };

  const setupAudioInput = (stream: MediaStream) => {
    if (!inputAudioContextRef.current) return;
    
    const source = inputAudioContextRef.current.createMediaStreamSource(stream);
    const scriptProcessor = inputAudioContextRef.current.createScriptProcessor(4096, 1, 1);
    
    scriptProcessor.onaudioprocess = (e) => {
      const inputData = e.inputBuffer.getChannelData(0);
      const pcmBlob = createBlob(inputData);
      
      if (sessionPromiseRef.current) {
        sessionPromiseRef.current.then((session) => {
          session.sendRealtimeInput({ media: pcmBlob });
        });
      }
    };

    source.connect(scriptProcessor);
    scriptProcessor.connect(inputAudioContextRef.current.destination);
    inputNodeRef.current = scriptProcessor;
  };

  const handleServerMessage = async (message: LiveServerMessage) => {
    const outputCtx = outputAudioContextRef.current;
    if (!outputCtx || !outputNodeRef.current) return;

    // Handle Audio
    const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
        // Ensure playback doesn't overlap weirdly, use nextStartTime cursor
        nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputCtx.currentTime);

        const audioBuffer = await decodeAudioData(
            decode(base64Audio),
            outputCtx,
            24000,
            1
        );

        const source = outputCtx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(outputNodeRef.current);
        
        source.addEventListener('ended', () => {
            sourcesRef.current.delete(source);
        });

        source.start(nextStartTimeRef.current);
        nextStartTimeRef.current += audioBuffer.duration;
        sourcesRef.current.add(source);
    }

    // Handle Interruption
    if (message.serverContent?.interrupted) {
        sourcesRef.current.forEach(source => source.stop());
        sourcesRef.current.clear();
        nextStartTimeRef.current = 0;
    }
  };

  const stopSession = () => {
    setIsActive(false);
    setIsConnecting(false);

    // Stop recording
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (inputNodeRef.current) {
      inputNodeRef.current.disconnect();
      inputNodeRef.current = null;
    }
    if (inputAudioContextRef.current) {
      inputAudioContextRef.current.close();
      inputAudioContextRef.current = null;
    }

    // Stop playback
    sourcesRef.current.forEach(s => s.stop());
    sourcesRef.current.clear();
    
    if (outputAudioContextRef.current) {
      outputAudioContextRef.current.close();
      outputAudioContextRef.current = null;
    }

    // Close Gemini session if possible (wrapper doesn't expose explicit close on promise easily, 
    // usually we just let it drift or relies on component unmount to break connection logic)
    // Note: The specific SDK structure suggests relying on unmounting/disconnecting logic if implemented.
    sessionPromiseRef.current = null;
  };

  const toggleAssistant = () => {
    if (isActive || isConnecting) {
      stopSession();
    } else {
      startSession();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      {/* Chat Interface (Visualizer placeholder) */}
      {(isActive || isConnecting) && (
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 mb-2 border border-blue-100 animate-in fade-in slide-in-from-bottom-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <Activity className={`h-5 w-5 ${isActive ? 'text-green-500 animate-pulse' : 'text-gray-400'}`} />
              KI Karriere-Assistent
            </h3>
            <button onClick={stopSession} className="text-gray-400 hover:text-gray-600">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="h-32 bg-slate-50 rounded-lg flex items-center justify-center border border-dashed border-gray-200">
             {isConnecting ? (
               <span className="text-sm text-gray-500 animate-pulse">Verbinde...</span>
             ) : (
               <div className="flex gap-1 items-center h-full">
                 {/* Fake Waveform Animation */}
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className="w-2 bg-blue-500 rounded-full animate-pulse-slow" style={{height: `${Math.random() * 80 + 20}%`, animationDelay: `${i * 0.1}s`}}></div>
                 ))}
               </div>
             )}
          </div>
          <p className="mt-4 text-sm text-gray-600 text-center">
             Sprechen Sie jetzt. Ich höre zu.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={toggleAssistant}
        className={`group flex items-center justify-center h-16 w-16 rounded-full shadow-lg transition-all duration-300 ${
          isActive 
            ? 'bg-red-500 hover:bg-red-600 ring-4 ring-red-200' 
            : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'
        }`}
        aria-label="KI Assistent starten"
      >
        {isActive ? (
          <MicOff className="h-8 w-8 text-white" />
        ) : (
          <Mic className="h-8 w-8 text-white" />
        )}
        
        {!isActive && (
           <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
             Sprich mit der KI
           </span>
        )}
      </button>

      {error && (
        <div className="absolute bottom-20 right-0 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-xs">
          <p className="text-sm">{error}</p>
        </div>
      )}
    </div>
  );
};

export default VoiceAssistant;