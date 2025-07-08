import React from "react";

const Skill = () => {
  const studentData = {
    "skills": [
      {
        "Backend": ".Net, Django, Next js",
        "Frontend": "React, Tailwind, TS, Js, HTML, CSS, Bootstrap", 
        "deploy": "Git, Jenkins, Docker"
      }
    ],
    "interests": ["Devops", "Backend Development", "System Architecture", "Frontend Development"],
  };

  return (
    <div 
      className="w-full min-h-[calc(100vh-4rem)] max-w-[1140px] mx-auto px-4 py-8 flex flex-col items-center justify-center"
      id="skill"
    >
      {/* Header section with responsive sizing */}
      <div className="w-full text-center mb-6 sm:mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          Skills
        </h1>
        <p className="text-lg sm:text-xl text-gray-700">
          My technical level
        </p>
      </div>

      {/* Skills box with responsive sizing and scrolling */}
      <div className="w-full max-w-3xl border-2 border-black rounded-xl bg-white text-black shadow-lg overflow-hidden">
        <pre className="p-4 sm:p-6 text-xs sm:text-sm md:text-base overflow-x-auto">
          {JSON.stringify(studentData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Skill;