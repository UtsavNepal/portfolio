import React from "react";

const Skill = () => {
  const studentData = {
    
    "skills": 
    [
      {
        "Backend":".Net, Node, Django,Next js",
        "Frontend":"React, Tailwind, TS, HTML, CSS,Js",
        "deploy":"Git, Jenkins, Docker" 
      }
    ],
    
    "interests": ["Devops", "Backend Development", "System Architecture", "Frontend Development"],
  };

  return (
    <div className="w-full  h-screen max-w-[1140px]  m-auto  flex items-center p-4 justify-center flex-col" id='skill'>
              <div className='md:h-[25vh] sm:h-[25vh] md:pt-12 sm:pt-8 flex flex-col items-center'>
          <h1 className='p-2 pt-4 text-xl sm:text-3xl md:text-5xl xl:text-7xl tracking-wide font-semibold'>Skills</h1>
          <p className='text-xl mb-4 font-medium'>My technical level</p>
        </div>
      <div className="max-w-[1140px] w-full lg:w-auto text-xs md:text-base border-2 border-black rounded-xl p-6 lg:px-28 shadow-2xl m-4 lg:m-auto">
        
        <pre className="rounded-md overflow-hidden">
          {JSON.stringify(studentData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Skill;
