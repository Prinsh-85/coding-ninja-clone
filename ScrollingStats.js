// components/ScrollyTellingStats.js
'use client';

import React, { useState, useEffect, useRef } from 'react';


const statsData = [
  {
    icon: ( <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg> ),
    iconColor: 'bg-gray-700',
    mainText: "9 years of transforming tech careers",
    subText: null
  },
  {
    icon: ( <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg> ),
    iconColor: 'bg-indigo-500',
    mainText: "1.5 Lac+ learners",
    subText: "cracked dream roles at top tech companies"
  },
  {
    icon: ( <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg> ),
    iconColor: 'bg-green-500',
    mainText: "1,400 Alumni in MAANG",
    subText: "& more in 103/111 Unicorns"
  },
  {
    icon: ( <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.158-.103.346-.195.574-.277a6.213 6.213 0 014.22.614A4.99 4.99 0 0115 13.5a5 5 0 01-5 5H8a5 5 0 01-5-5 5 5 0 012.89-4.618a5.002 5.002 0 012.543-1.464z"></path><path d="M15 13.5a5 5 0 01-5 5H8a5 5 0 01-5-5 5 5 0 012.89-4.618a5.002 5.002 0 012.543-1.464A6.213 6.213 0 0113.207 7.5h.383a4.99 4.99 0 011.41 6z"></path></svg> ),
    iconColor: 'bg-pink-500',
    mainText: "1 Cr+ highest CTC",
    subText: "after completing the course"
  },
  {
    icon: ( <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg> ),
    iconColor: 'bg-blue-500',
    mainText: "128% average hike",
    subText: "via our placement cell"
  }
];

const ScrollyTellingStats = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const { top, height } = container.getBoundingClientRect();
            const scrollableHeight = height - window.innerHeight;
            
            if (top > 0 || top < -scrollableHeight) return;

            let progress = -top / scrollableHeight;
            progress = Math.max(0, Math.min(1, progress));

            const newIndex = Math.min(Math.floor(progress * statsData.length), statsData.length - 1);
            setActiveIndex(newIndex);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        
        <div ref={containerRef} className="relative bg-gray-900 py-24 px-4">
            
            <div className="sticky top-0 h-screen flex items-center justify-center text-white overflow-hidden">
                
                <div className="absolute inset-0 bg-[url(https://tailwindcss.com/_next/static/media/grid.1d041615.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

                
                <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-row items-center">
                    
                    
                    <div className="w-1/3 flex justify-center">
                        <div className="flex flex-col items-center space-y-2">
                            {statsData.map((stat, index) => (
                                <React.Fragment key={index}>
                                    <div className={`p-4 rounded-xl transition-all duration-300 ${activeIndex === index ? stat.iconColor : 'bg-gray-800'}`}>
                                        {stat.icon}
                                    </div>
                                    {index < statsData.length - 1 && (
                                        <div className="w-px h-12 bg-gray-700"></div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    
                    <div className="w-2/3 relative h-48 flex items-center text-left">
                        {statsData.map((stat, index) => (
                            <div
                                key={index}
                                className={`absolute transition-opacity duration-500 ease-in-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <h2 className="text-4xl sm:text-6xl font-extrabold">{stat.mainText}</h2>
                                {stat.subText && <p className="mt-4 text-lg text-gray-400">{stat.subText}</p>}
                            </div>
                        ))}
                    </div>

                </div>
                
                 
                 <div className={`absolute bottom-24 left-1/2 -translate-x-1/2 lg:left-auto lg:right-[15%] lg:bottom-32 lg:translate-x-0 transition-opacity duration-1000 ${activeIndex === statsData.length - 1 ? 'opacity-100' : 'opacity-0'}`}>
                    <a href="#" className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-orange-600 transition-colors">
                        Explore offerings
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ScrollyTellingStats;