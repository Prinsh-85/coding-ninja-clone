// components/Offerings.js
import React from 'react';


const offeringsData = [
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 32.25H36V28.625C36 27.2435 34.866 26.125 33.465 26.125H14.535C13.134 26.125 12 27.2435 12 28.625V32.25Z" fill="#FFC56E"></path>
        <path d="M12 24.375H36V20.75C36 19.3685 34.866 18.25 33.465 18.25H14.535C13.134 18.25 12 19.3685 12 20.75V24.375Z" fill="#75BFFF"></path>
        <path d="M33.465 10.5H14.535C13.134 10.5 12 11.6185 12 13V16.625H36V13C36 11.6185 34.866 10.5 33.465 10.5Z" fill="#FF8A9B"></path>
      </svg>
    ),
    title: 'Full Stack Web Development with GenAI',
    stats: ['140+ Hrs of content', '600+ Problems', '10K+ Learners']
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35.625 21.375V35.625H28.5V26.25H19.5V35.625H12.375V21.375L24 12.375L35.625 21.375Z" fill="#75BFFF"></path>
        <path d="M26.25 12.375V5.25H21.75V9.6525L26.25 12.375Z" fill="#FFC56E"></path>
      </svg>
    ),
    title: 'Data Analytics with GenAI',
    stats: ['100+ Hrs of content', '300+ Problems', '2000+ Learners']
  }
];

const Offerings = () => {
  return (
    <section className="bg-white pt-20 pb-10 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center">
        <h2 className="text-6xl md:text-8xl font-extrabold text-gray-200 tracking-wider">
          OUR OFFERINGS
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <div className="relative pl-20">
          
          <div className="flex items-center mb-12 relative">
             <span className="absolute -left-20 top-0 p-1 bg-white rounded-full border-2 border-dashed border-gray-300 -translate-x-1/2">
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                </span>
            </span>
            <h3 className="text-xl font-bold text-gray-800">Job Bootcamp</h3>
            <span className="ml-4 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              For graduates
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offeringsData.map((offering, index) => (
              <div key={index} className="bg-slate-50/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                  {offering.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 h-16">{offering.title}</h4>
                <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between text-sm text-gray-500">
                  {offering.stats.map((stat, i) => (
                    <span key={i}>{stat}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;