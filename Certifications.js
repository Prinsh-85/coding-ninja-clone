// components/Certifications.js
 import React from 'react';


 const graduateCourses = [
   {
     image: '/iit-gwahati.jpg',
     title: 'PG Certification in Data Analytics with GenAI',
     partner: 'E&ICT Academy, IIT Guwahati',
     logos: ['\logo1.jpg', '\logo2.webp','\logo3.jpg'], 
     duration: '6 months',
   },
   {
     image: '/iit-gwahati.jpg',
     title: 'PG Certification in Data Science with GenAI',
     partner: 'E&ICT Academy, IIT Guwahati',
     logos: ['\logo4.webp', '\logo6.jpeg','\logo5.webp'],
     duration: '9 months',
   },
   {
     image: '\iit_madras.png',
     title: 'Advanced Certification in GenAI for Non-Tech Professionals',
     partner: 'IITM Pravartak, TIH IIT Madras',
     logos: ['\logo1.jpg', '\logo8.png','\logo7.png'],
     duration: '6 months',
   }
 ];


 const collegeCourses = [
   {
     image: '\iit_madras.png',
     title: 'Training and Internship Certification in Advanced DSA',
     partner: 'IITM Pravartak, TIH IIT Madras',
     logos: ['\logo10.png', '\logo11.png','\logo9.png','\logo12.jpeg'],
     duration: '4 months',
   },
   {
     image: '\iit-gwahati.jpg',
     title: 'Training and Internship Certification in Data Analytics',
     partner: 'E&ICT Academy, IIT Guwahati',
     logos: ['\logo13.webp', '\logo14.jpg','\logo4.webp','\logo15.avif'],
     duration: '6 months',
   },
   {
     image: '\iit_madras.png',
     title: 'Training and Internship Certification in Full Stack Web Development',
     partner: 'IITM Pravartak, TIH IIT Madras',
     logos: ['\logo16.png', '\logo10.png', '\logo17.webp','\logo18.png'],
     duration: '9 months',
   }
 ];


 const CertificationCard = ({ course }) => (
   <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200/80 overflow-hidden">
     <img src={course.image} alt={course.title} className="w-full h-36 object-cover" />
     <div className="p-5">
       <h4 className="font-bold text-gray-800 h-16">{course.title}</h4>
       <div className="mt-3 bg-yellow-50 text-yellow-700 text-xs font-semibold px-3 py-1.5 rounded-md inline-block">
         {course.partner}
       </div>
       <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
         <div className="flex items-center gap-2">
           {course.logos.map((logo, index) => (
             <span key={index} className="w-5 h-5 rounded-full bg-gray-300">
               
               {logo && <img src={logo} alt="Logo" className="w-full h-full object-contain" />}
             </span>
           ))}
         </div>
         <span>{course.duration}</span>
       </div>
     </div>
   </div>
 );


 const Certifications = () => {
   return (
     <section className="bg-[#FEFBF6] py-20">
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
         
         
         <div className="relative pl-10 sm:pl-12 lg:pl-16">
           
           <div className="flex items-center mb-12">
             <span className="absolute left-0 -translate-x-1/2 bg-[#FEFBF6] p-1">
               <span className="w-8 h-8 bg-white border-2 border-gray-300 rounded-md flex items-center justify-center">
                 
                 <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
               </span>
             </span>
             <h2 className="text-2xl font-bold text-gray-800">IIT Certifications</h2>
           </div>

           
           <div>
             <div className="absolute left-0 -translate-x-1/2 mt-1 bg-[#FEFBF6]">
                 <span className="bg-[#644511] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                 For graduates
                 </span>
             </div>
             <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {graduateCourses.map((course, index) => (
                 <CertificationCard key={index} course={course} />
               ))}
             </div>
           </div>

           
           <div className="mt-16">
              <div className="absolute left-0 -translate-x-1/2 mt-1 bg-[#FEFBF6]">
                 <span className="bg-[#644511] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                 For college students
                 </span>
             </div>
             <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {collegeCourses.map((course, index) => (
                 <CertificationCard key={index} course={course} />
               ))}
             </div>
           </div>

         </div>
       </div>
     </section>
   );
 };

 export default Certifications;