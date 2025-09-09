import React from 'react';


const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 flex-shrink-0 text-green-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);


const features = [
  { text: "128% average hike", subtext: "via our placement cell" },
  { text: "1.5 Lac+ learners", subtext: "cracked top tech companies" },
  { text: "1,400+ alumni in MAANG", subtext: "& 103 unicorn startups" },
];


const experienceLevels = [
    { id: 'exp-working-tech', label: 'Working Professional - Technical Roles' },
    { id: 'exp-working-non-tech', label: 'Working Professional - Non Technical' },
    { id: 'exp-college-final', label: 'College Student - Final Year' },
    { id: 'exp-college-pre-final', label: 'College Student - 1st to Pre-final Year' },
    { id: 'exp-others', label: 'Others' },
];


const HeroWithForm = () => {
  return (
    <section className="bg-[#1c2331] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        
        <div className="lg:pr-10">
          <p className="text-green-400 font-semibold">Restricted by opportunities?</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 leading-tight">
            Get the tech career you deserve. Faster.
          </h1>
          <div className="mt-10 space-y-5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-black bg-opacity-20 p-4 rounded-lg">
                <CheckIcon />
                <div className="ml-4">
                  <p className="font-bold text-lg">{feature.text}</p>
                  <p className="text-gray-400 text-sm">{feature.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex justify-center lg:justify-end">
          
          <div className="relative border-gray-800 bg-gray-800 border-[12px] rounded-[2.5rem] h-[680px] w-[350px] shadow-2xl">
            
           
            <div className="w-full h-full overflow-hidden rounded-[2rem] bg-[#1c2331]">
              <div className="p-6 h-full overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">Let's find the right course for you</h2>
                <form className="space-y-4 text-sm">
                  
                  <div>
                    <label className="block font-semibold text-gray-300 mb-2">Experience</label>
                    <div className="space-y-2">
                      {experienceLevels.map((level) => (
                        <div key={level.id} className="flex items-center">
                          <input id={level.id} name="experience" type="radio" className="h-4 w-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500" />
                          <label htmlFor={level.id} className="ml-2 block text-gray-300">{level.label}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block font-semibold text-gray-300 mb-2">Select topic of interest</label>
                    <select id="interest" name="interest" className="w-full p-2.5 bg-white border border-gray-300 rounded-md text-gray-800 focus:ring-orange-500 focus:border-orange-500">
                      <option>Select your option/choices</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="name" className="block font-semibold text-gray-300 mb-2">Name</label>
                    <input type="text" id="name" placeholder="Enter name" className="w-full p-2.5 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:ring-orange-500 focus:border-orange-500" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-semibold text-gray-300 mb-2">Phone Number</label>
                    <input type="tel" id="phone" placeholder="Enter phone number" className="w-full p-2.5 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:ring-orange-500 focus:border-orange-500" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-semibold text-gray-300 mb-2">Email</label>
                    <input type="email" id="email" placeholder="Enter email" className="w-full p-2.5 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:ring-orange-500 focus:border-orange-500" />
                  </div>
                  
                  <div className="pt-2">
                    <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors">Find your course</button>
                  </div>

                  <p className="text-xs text-gray-400 pt-1">
                    I authorise Coding Ninjas to contact me with course updates & offers via Email/SMS/Whatsapp/Call. I have read and agree to
                    <a href="#" className="underline hover:text-white"> Privacy Policy</a> &
                    <a href="#" className="underline hover:text-white"> Terms of use</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroWithForm;