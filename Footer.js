// components/Footer.js
import React from 'react';


const InstagramIcon = () => <svg className="w-6 h-6 hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.465c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zm-1.18 4.74a4.42 4.42 0 100 8.84 4.42 4.42 0 000-8.84zm-6.44 8.242a.75.75 0 100 1.5.75.75 0 000-1.5z" clipRule="evenodd" /></svg>;
const FacebookIcon = () => <svg className="w-6 h-6 hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>;
const LinkedInIcon = () => <svg className="w-6 h-6 hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.389 0-1.601 1.086-1.601 2.206v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.367 7.684a2.57 2.57 0 01-2.57-2.57c0-1.418 1.153-2.57 2.57-2.57 1.418 0 2.57 1.152 2.57 2.57 0 1.418-1.152 2.57-2.57 2.57zM6.65 16.338H4.084v-8.59h2.566v8.59zM17.618 2H6.383A4.38 4.38 0 002 6.383v11.234A4.38 4.38 0 006.383 22h11.234A4.38 4.38 0 0022 17.618V6.383A4.38 4.38 0 0017.618 2z" clipRule="evenodd" /></svg>;
const TwitterIcon = () => <svg className="w-6 h-6 hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>;

const Footer = () => {
  return (
    <footer className="bg-[#3a2d21] text-gray-300 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 text-sm">

        
        <div className="col-span-2 space-y-8">
          <div>
            <h3 className="font-bold text-white mb-4">Contact us</h3>
            <div className="flex items-center space-x-2 mb-2 text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              <span>1800-123-3598</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              <span>contact@codingninjas.com</span>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Our offerings</h3>
            
          </div>
        </div>

        
        <div className="hidden md:block"></div>

        
        <div className="space-y-4">
          <h3 className="font-bold text-white">Coding Ninjas</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & conditions</a></li>
            <li><a href="#" className="hover:text-white">Pricing & refund policy</a></li>
            <li><a href="#" className="hover:text-white">Bug bounty</a></li>
            <li><a href="#" className="hover:text-white">Review</a></li>
            <li><a href="#" className="hover:text-white">Press release</a></li>
          </ul>
        </div>

        
        <div className="space-y-4">
          <h3 className="font-bold text-white">Products</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white">Job Bootcamp</a></li>
            <li><a href="#" className="hover:text-white">Code-360</a></li>
            <li><a href="#" className="hover:text-white">Professional Certifications</a></li>
            <li><a href="#" className="hover:text-white">Student Certifications</a></li>
          </ul>
        </div>

        
        <div className="space-y-4">
          <h3 className="font-bold text-white">Community</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white">10X Club</a></li>
            <li><a href="#" className="hover:text-white">Student Chapters</a></li>
            <li><a href="#" className="hover:text-white">Hire from us</a></li>
          </ul>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-400 mb-4 md:mb-0">Copyright © Sunrise Mentors Pvt. Ltd.</p>
        <div className="flex space-x-4 text-gray-400">
          <a href="#"><InstagramIcon /></a>
          <a href="#"><FacebookIcon /></a>
          <a href="#"><LinkedInIcon /></a>
          <a href="#"><TwitterIcon /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;