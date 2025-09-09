// components/Navbar.js
"use client";

import React, { useState } from "react";


const ChevronDownIcon = () => (
  <svg
    className="w-5 h-5 ml-1 text-blue-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);


const jobBootcampMenu = [
  {
    icon: (
      <img
        src="/nav1.svg"
        alt="Full Stack Icon"
        className="w-12 h-12 rounded-md object-cover"
      />
    ),
    title: "Full Stack Web Development with GenAI",
    certified: "Certified by Coding Ninjas",
  },
  {
    icon: (
      <img
        src="/nav2.png"
        alt="Data Analytics Icon"
        className="w-12 h-12 rounded-md object-cover"
      />
    ),
    title: "Data Analytics with GenAI",
    certified: "Certified by Coding Ninjas",
  },
];


const allIitCerts = [
  {
    category: "graduates",
    icon: (
      <img
        src="/nav4.png"
        alt="Data Analytics"
        className="w-10 h-10 rounded-full object-cover"
      />
    ),
    partner: "E&ICT Academy, IIT Guwahati",
    title: "PG Certification in Data Analytics with GenAI",
  },
  {
    category: "graduates",
    icon: (
      <img
        src="/nav4.png"
        alt="Data Science"
        className="w-10 h-10 rounded-full object-cover"
      />
    ),
    partner: "E&ICT Academy, IIT Guwahati",
    title: "PG Certification in Data Science with GenAI",
  },
  {
    category: "graduates",
    icon: (
      <img
        src="/nav3.png"
        alt="GenAI for Non-Tech"
        className="w-10 h-10 rounded-full object-cover"
      />
    ),
    partner: "IITM Pravartak, TIH IIT Madras",
    title: "Advanced Certification in GenAI for Non-Tech Professionals",
  },
  {
    category: "college",
    icon: (
      <img
        src="/nav3.png"
        alt="Advanced DSA"
        className="w-10 h-10 rounded-full object-cover"
      />
    ),
    partner: "IITM Pravartak, TIH IIT Madras",
    title: "Training and Internship Certification in Advanced DSA",
  },
  {
    category: "college",
    icon: (
      <img
        src="/nav4.png"
        alt="Data Analytics"
        className="w-10 h-10 rounded-full object-cover"
      />
    ),
    partner: "E&ICT Academy, IIT Guwahati",
    title: "Training and Internship Certification in Data Analytics",
  },
  {
    category: "college",
    icon: (
      <img
        src="/nav3.png"
        alt="Full Stack"
        className="w-10 h-10 rounded-full object-cover"
      />
    ),
    partner: "IITM Pravartak, TIH IIT Madras",
    title:
      "Training and Internship Certification in Full Stack Web Development",
  },
];


const newLaunchesMenu = [
  {
    icon: (
      <img
        src="/nav5.png"
        alt="GenAI & Multi Agent Systems"
        className="w-12 h-12"
      />
    ),
    title: "Advanced Certification in GenAI & Multi Agent Systems",
    certified: "Certified by Coding Ninjas",
  },
  {
    icon: (
      <img
        src="/nav6.png"
        alt="GenAI for Non-tech Professionals"
        className="w-12 h-12"
      />
    ),
    title: "Advanced Certification in GenAI for Non-tech Professionals",
    certified: "Certified by Coding Ninjas",
  },
  {
    icon: (
      <img
        src="/nav7.png"
        alt="Data Science with GenAI"
        className="w-12 h-12"
      />
    ),
    title: "Advanced Certification in Data Science with GenAI",
    certified: "Certified by Coding Ninjas",
  },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeIitCategory, setActiveIitCategory] = useState("graduates");
  

  return (
    <nav
      className="bg-white shadow-md sticky top-0 z-50"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img
                className="h-9 w-auto"
                src="\codinglogo.png"
                alt="Coding Ninjas Logo"
                
              />
               <span className="ml-2 text-2xl  text-gray-800 tracking-tight">coding</span>
               <span className="ml-2 text-2xl  text-gray-600 tracking-tight">ninjas</span>
            </a>
          </div>

          
          <div className="hidden lg:flex items-center space-x-10">
            
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("bootcamp")}
            >
              <button className="text-blue-900 font-semibold hover:text-orange-500 flex items-center transition-colors">
                Job Bootcamp <ChevronDownIcon />
              </button>
              {openMenu === "bootcamp" && (
                <div className="absolute top-full mt-4 -left-1/2 transform translate-x-1/4 w-96 bg-white rounded-xl shadow-lg p-6">
                  <p className="text-gray-500 text-sm mb-4">For graduates</p>
                  <div className="space-y-4">
                    {jobBootcampMenu.map((item) => (
                      <a
                        href="#"
                        key={item.title}
                        className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100"
                      >
                        <div>{item.icon}</div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {item.title}
                          </p>
                          <p className="text-sm text-blue-600">
                            {item.certified}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            
            <div className="relative" onMouseEnter={() => setOpenMenu("iit")}>
              <button
                className={`font-semibold flex items-center transition-colors ${
                  openMenu === "iit"
                    ? "bg-gray-200/80 text-orange-500 px-4 py-2 rounded-lg"
                    : "text-blue-900 hover:text-orange-500"
                }`}
              >
                IIT Certifications <ChevronDownIcon />
              </button>
              {openMenu === "iit" && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen bg-gray-50 py-8 shadow-md">
                  <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 px-8">
                    <div className="col-span-1">
                      <h3 className="font-bold text-gray-700 mb-4">Category</h3>
                      <div className="space-y-2">
                        <button
                          onClick={() => setActiveIitCategory("graduates")}
                          className={`w-full flex justify-between items-center p-3 rounded-lg font-semibold border transition-colors ${
                            activeIitCategory === "graduates"
                              ? "bg-gray-200/80 text-gray-800 border-gray-300"
                              : "text-gray-600 hover:bg-gray-200/80 border-transparent"
                          }`}
                        >
                          For graduates <span>&gt;</span>
                        </button>
                        <button
                          onClick={() => setActiveIitCategory("college")}
                          className={`w-full flex justify-between items-center p-3 rounded-lg font-semibold border transition-colors ${
                            activeIitCategory === "college"
                              ? "bg-gray-200/80 text-gray-800 border-gray-300"
                              : "text-gray-600 hover:bg-gray-200/80 border-transparent"
                          }`}
                        >
                          For college students <span>&gt;</span>
                        </button>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {allIitCerts
                          .filter((item) => item.category === activeIitCategory)
                          .map((item) => (
                            <a
                              href="#"
                              key={item.title}
                              className="flex items-start space-x-4 p-2 rounded-lg hover:bg-gray-200/80 border-b border-gray-200"
                            >
                              <div className="flex-shrink-0 pt-1">
                                {item.icon}
                              </div>
                              <div>
                                <p className="text-xs text-blue-700 font-semibold">
                                  {item.partner}
                                </p>
                                <p className="text-sm font-bold text-gray-800">
                                  {item.title}
                                </p>
                              </div>
                            </a>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("launches")}
            >
              <button
                className={`font-semibold flex items-center transition-colors ${
                  openMenu === "launches"
                    ? "bg-gray-200/80 text-orange-500 px-4 py-2 rounded-lg"
                    : "text-blue-900 hover:text-orange-500"
                }`}
              >
                New Launches <ChevronDownIcon />
              </button>
              {openMenu === "launches" && (
                <div className="absolute top-full mt-4 right-0 w-96 bg-white rounded-xl shadow-lg p-6">
                  <p className="text-gray-500 text-sm mb-4">For graduates</p>
                  <div className="space-y-4">
                    {newLaunchesMenu.map((item) => (
                      <a
                        href="#"
                        key={item.title}
                        className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-100"
                      >
                        <div>{item.icon}</div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {item.title}
                          </p>
                          <p className="text-sm text-blue-600">
                            {item.certified}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          
          <div>
            <a
              href="#"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-sm"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
