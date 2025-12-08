import React from 'react';
import { MOCK_JOBS } from '../constants';
import { Briefcase, MapPin, Clock, Euro } from 'lucide-react';

const JobBoard: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Aktuelle Stellenangebote</h2>
            <p className="text-gray-600 mt-2">Finden Sie die Top-Arbeitgeber der Elektrobranche.</p>
          </div>
          <div className="mt-4 md:mt-0 text-blue-600 font-medium cursor-pointer hover:underline">
            Alle Jobs anzeigen &rarr;
          </div>
        </div>

        <div className="grid gap-6">
          {MOCK_JOBS.map((job) => (
            <div 
              key={job.id} 
              className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border ${job.isFeatured ? 'border-blue-200 ring-1 ring-blue-100' : 'border-gray-100'}`}
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900 hover:text-blue-600 cursor-pointer transition-colors">
                      {job.title}
                    </h3>
                    {job.isFeatured && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        Top Job
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-gray-700 font-medium mb-3">{job.company}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1.5" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1.5" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Euro className="h-4 w-4 mr-1.5" />
                      {job.salaryRange}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1.5" />
                      vor 2 Tagen
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span key={tag} className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 md:mt-0 md:ml-6 flex flex-col items-start md:items-end justify-between">
                  <img 
                    src={`https://picsum.photos/seed/${job.id}/64/64`} 
                    alt={job.company} 
                    className="w-12 h-12 rounded-lg object-cover mb-4 hidden md:block"
                  />
                  <button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition-colors w-full md:w-auto">
                    Jetzt bewerben
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobBoard;