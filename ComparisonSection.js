// components/ComparisonSection.js
import React from 'react';


const CheckIcon = () => (
    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const CrossIcon = () => (
    <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const comparisonData = [
    { feature: 'Structured + problem solving based', cn: true, free: false, others: true },
    { feature: 'Fastest 1:1 doubt support', cn: true, free: false, others: false },
    { feature: 'Integrated prep platform', cn: true, free: false, others: false },
    { feature: 'Profiles highlighted on Naukri', cn: true, free: false, others: false },
];

const ComparisonSection = () => {
    return (
        <section className="relative bg-gray-900 py-24 px-4">
            
            <div className="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]"></div>
            
            
            <div className="relative max-w-4xl mx-auto bg-slate-900/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 lg:p-12 text-white">
                
                
                <div className="space-y-4">
                   
                    <div className="grid grid-cols-5 gap-4 text-sm text-gray-400 font-semibold border-b border-gray-700 pb-4">
                        <div className="col-span-2"></div>
                        <div className="flex items-center justify-center space-x-2">
                            <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">CN</span>
                        </div>
                        <div className="text-center">Free resources</div>
                        <div className="text-center">Other courses</div>
                    </div>

                    
                    {comparisonData.map((item, index) => (
                        <div key={index} className="grid grid-cols-5 gap-4 items-center py-2">
                            <div className="col-span-2 text-sm font-medium">{item.feature}</div>
                            <div className="flex justify-center">{item.cn ? <CheckIcon /> : <CrossIcon />}</div>
                            <div className="flex justify-center">{item.free ? <CheckIcon /> : <CrossIcon />}</div>
                            <div className="flex justify-center">{item.others ? <CheckIcon /> : <CrossIcon />}</div>
                        </div>
                    ))}
                </div>

                
                <hr className="my-12 border-gray-700" />

               
                <div className="space-y-8">
                    
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center space-x-2">
                                <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">CN</span>
                                <span className="font-semibold">codingninjas</span>
                            </div>
                            <span className="text-xs text-yellow-300 font-medium">Your dream role, faster and with confidence! ✨</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"></div>
                    </div>

                    
                    <div>
                         <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-gray-400">Others</span>
                            <span className="text-xs text-gray-500">Average role, under-confident</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-gray-700">
                             <div className="w-1/2 h-full bg-gray-500 rounded-full"></div>
                        </div>
                    </div>
                </div>

                
                <div className="mt-16 text-center">
                    <a href="#" className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-orange-600 transition-colors">
                        Explore offerings
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;