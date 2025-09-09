// components/NewLaunches.js
import React from 'react';


const newLaunchesData = [
 {
   icon: (
     <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M11 19H21L27 13L37 19" stroke="#FF8A9B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
       <path d="M11 29H21L27 23L37 29" stroke="#75BFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
       <path d="M11 39H21L27 33L37 39" stroke="#FFC56E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
     </svg>
   ),
   title: 'Advanced Certification in GenAI & Multi Agent Systems',
   stats: ['100+ Hrs of content', '300+ Problems', '576+ Learners']
 },
 {
   icon: (
     <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M24 14V4H38L24 14Z" fill="#FFC56E"/>
       <path d="M9.99997 14V4H24L9.99997 14Z" fill="#FF8A9B"/>
       <path d="M4 14V28H18L4 14Z" fill="#75BFFF"/>
       <path d="M29.9999 14V28H44L29.9999 14Z" fill="#FFC56E"/>
       <path d="M9.99997 28V42H24L9.99997 28Z" fill="#FF8A9B"/>
       <path d="M29.9999 28V42H44L29.9999 28Z" fill="#75BFFF"/>
     </svg>
   ),
   title: 'Advanced Certification in GenAI for Non-tech Professionals',
   stats: ['100+ Hrs of content', '300+ Problems', '523+ Learners']
 },
 {
   icon: (
     <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M39 29V14C39 11.7909 37.2091 10 35 10H13C10.7909 10 9 11.7909 9 14V29C9 31.2091 10.7909 33 13 33H35C37.2091 33 39 31.2091 39 29Z" fill="#FFC56E"/>
       <path d="M33 39H15V33H33V39Z" fill="#75BFFF"/>
       <path d="M24 33V44" stroke="#FF8A9B" strokeWidth="3" strokeLinecap="round"/>
     </svg>
   ),
   title: 'Advanced Certification in Data Science with GenAI',
   stats: ['140+ Hrs of content', '600+ Problems', '780+ Learners']
 }
];

const NewLaunchesCard = ({ launch }) => (
 <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200/80 p-6">
   <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
     {launch.icon}
   </div>
   <h4 className="font-bold text-gray-800 h-20">{launch.title}</h4>
   <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between text-sm text-gray-500">
     {launch.stats.map((stat, index) => (
       <span key={index}>{stat}</span>
     ))}
   </div>
 </div>
);

const NewLaunches = () => {
 return (
   <section className="bg-white py-20">
     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
       
       

       <div className="relative pl-10 sm:pl-12 lg:pl-16">
         
         <div className="flex items-center mb-12">
           <span className="absolute left-0 -translate-x-1/2 bg-white p-1">
             <span className="w-8 h-8 bg-white border-2 border-gray-300 rounded-md flex items-center justify-center">
               
               <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
               </svg>
             </span>
           </span>
           <h2 className="text-2xl font-bold text-gray-800">New Launches</h2>
         </div>

         
         <div className="absolute left-10 sm:left-12 lg:left-16 -translate-y-1/2 mt-1 bg-white">
           <span className="bg-[#644511] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
             For graduates
           </span>
         </div>

        
         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {newLaunchesData.map((launch, index) => (
             <NewLaunchesCard key={index} launch={launch} />
           ))}
         </div>
       </div>
     </div>
   </section>
 );
};

export default NewLaunches;