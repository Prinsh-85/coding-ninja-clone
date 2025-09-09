// components/WhyUs.js
import React from 'react';


const features = [
    {
        icon: (
            <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
        ),
        text: 'Fastest 1:1 doubt support',
        bgColor: 'bg-green-500/10'
    },
    {
        icon: (
            <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        ),
        text: 'Stanford/IIT/MAANG faculty',
        bgColor: 'bg-indigo-500/10'
    },
    {
        icon: (
            <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        ),
        text: 'Placement assistance',
        bgColor: 'bg-orange-500/10'
    }
];

const WhyUs = () => {
    return (
        <section className="relative bg-gray-900  text-white py-24 px-4 overflow-hidden">
            
            
            <div className="absolute inset-0 bg-[url(https://tailwindcss.com/_next/static/media/grid.1d041615.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>

            
            <div className="text-center mb-16">
                <h2 className="text-5xl font-extrabold text-white">
                    WHY US
                </h2>
            </div>

            
            <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 flex flex-col justify-between h-[450px] shadow-lg border border-gray-700">
                    
                    <div className="self-end text-gray-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M5.071 1.243a.5.5 0 01.858.514L3.383 6h1.234c.482 0 .848.343.848.848 0 .466-.354.848-.79.848H1.54c-.461 0-.848-.39-.848-.848a.5.5 0 01.37-.49L5.07 1.243zM8.757 6.67a.5.5 0 01.858-.514L12.617 1h-1.234a.848.848 0 00-.848.848.85.85 0 00.79.848h1.946L10.243 6.157a.5.5 0 01-.858-.514zM11.95 14.93a.5.5 0 01.514-.858l3-1.732a.5.5 0 01.858.514l-3 1.732a.5.5 0 01-.858-.514z"></path></svg>
                    </div>
                    
                    <div className="p-4">
                        
                        <h3 className="font-bold text-lg">Ankush Singla</h3>
                        <p className="text-sm text-gray-400">Co-Founder of Coding Ninjas | Mentor</p>
                    </div>
                </div>

                
                <div className="space-y-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg p-4 flex items-center space-x-4 hover:border-gray-500 transition-colors">
                            <div className={`p-3 rounded-lg ${feature.bgColor}`}>
                                {feature.icon}
                            </div>
                            <span className="font-semibold">{feature.text}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyUs;