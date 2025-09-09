// components/ImportantLinks.js
import React from 'react';


const linkData = {
  bootcamp: [
    { name: 'Web Development Bootcamp (MERN & Springboot)', href: '#' },
    { name: 'Data Analytics Job Bootcamp', href: '#' },
  ],
  iitProf: [
    { name: 'PG Certification in Data Analytics by E&ICT Academy, IIT Guwahati', href: '#' },
    { name: 'PG Certification in Data Science by E&ICT Academy, IIT Guwahati', href: '#' },
    { name: 'Generative AI for Non-Tech Professionals by IITM Pravartak, TIH IIT Madras', href: '#' },
  ],
  iitStudent: [
    { name: 'Training and Internship Certification in Data Analytics by E&ICT Academy, IIT Guwahati', href: '#' },
    { name: 'Training and Internship Certification in Advanced DSA by IITM Pravartak, TIH IIT Madras', href: '#' },
    { name: 'Training and Internship Certification in Full Stack Web Development with Generative AI + DSA by IITM Pravartak, TIH IIT Madras', href: '#' },
  ],
  newLaunches: [
    { name: 'Advanced Certification in GenAI & Multi Agent Systems', href: '#' },
  ],
};

const LinkRow = ({ title, links }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 py-4 border-b border-gray-700">
    <div className="md:col-span-1">
      <h3 className="font-semibold text-white">{title}</h3>
    </div>
    <div className="md:col-span-3 mt-2 md:mt-0">
      {links.map((link, index) => (
        <React.Fragment key={link.name}>
          <a href={link.href} className="text-gray-400 hover:text-white hover:underline underline-offset-4 decoration-gray-500 text-sm">
            {link.name}
          </a>
          {index < links.length - 1 && <span className="text-gray-600 mx-2">|</span>}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const ImportantLinks = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Important Links</h2>

        
        <div className="space-y-4">
          <LinkRow title="Job Bootcamp for professionals" links={linkData.bootcamp} />
          <LinkRow title="IIT Certifications for Professionals" links={linkData.iitProf} />
          <LinkRow title="IIT Certifications for Students" links={linkData.iitStudent} />
          <LinkRow title="Our New Launches" links={linkData.newLaunches} />
        </div>

       
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-semibold text-white mb-4">We accept payments using:</h3>
            <div className="flex items-center space-x-4">
              
              <div className="bg-white rounded p-1 h-8 flex items-center"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4"/></div>
              <div className="bg-white rounded p-1 h-8 flex items-center"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5"/></div>
              <div className="bg-white rounded p-1 h-8 flex items-center"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="h-6"/></div>
              <div className="border border-gray-600 rounded px-3 py-1 text-sm">No Cost EMI</div>
            </div>
          </div>
          <div className="flex items-center justify-start md:justify-end space-x-4">
            <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-md flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5.002.997.997 0 001 6v5a1 1 0 001 1h1.333a1 1 0 001-1V9.333a1 1 0 011-1h1.333a1 1 0 011 1v2.667a1 1 0 001 1h1.333a1 1 0 001-1V9.333a1 1 0 011-1h1.333a1 1 0 011 1v5a1 1 0 001 1h1.333a1 1 0 001-1V6a.997.997 0 00-.166-.998A11.954 11.954 0 0110 1.944zM10 6a3 3 0 100 6 3 3 0 000-6z" clipRule="evenodd"></path></svg>
                <span>100% safe & secure payment</span>
            </div>
             <div className="bg-white rounded p-1 h-8 flex items-center"><img src="https://razorpay.com/assets/razorpay-logo-white.svg" alt="Razorpay" className="h-5 filter invert"/></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;