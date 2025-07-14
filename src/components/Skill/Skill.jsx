import React from "react";

const Skill = () => {
  const skillsData = {
    skills: [
      {
        "Backend Development": ".NET (C#), Django, Next.js, Express.js",
        "Frontend Development": "React, Tailwind, TypeScript, JavaScript, HTML, CSS, Bootstrap",
        "Database & Storage": "PostgreSQL, MySQL, MongoDB, Stored Procedures",
        "DevOps & Cloud": "Kubernetes (Minikube), Jenkins, Docker, Git",
        "Architectural Patterns": "Clean Architecture, CQRS, MediatR, Repository Pattern",
        "Soft Skills": "Team Collaboration, Communication, Time Management"
      }
    ],
    interests: [
      "Cloud Infrastructure", 
      "Microservices Architecture", 
      "System Design", 
      "Full-Stack Development",
      "CI/CD Pipelines"
    ]
  };

  return (
    <div 
      className="w-full min-h-[calc(100vh-4rem)] max-w-6xl mx-auto px-4 py-12 flex flex-col items-center justify-start"
      id="skills"
    >
      {/* Header section */}
      <div className="w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
          Technical Skills
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          My expertise and areas of interest
        </p>
      </div>

      {/* Skills Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {Object.entries(skillsData.skills[0]).map(([category, skills]) => (
          <div 
            key={category} 
            className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{category}</h3>
            <ul className="flex flex-wrap gap-2">
              {skills.split(', ').map((skill, index) => (
                <li 
                  key={index} 
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Interests Section */}
      <div className="w-full max-w-4xl">
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">Areas of Interest</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skillsData.interests.map((interest, index) => (
            <span 
              key={index} 
              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;