import React from "react";

const Skill = () => {
  const skillsData = {
    skills: [
      {
        "Backend Development": ".NET (C#), Django, Next.js, Fastapi,Express.js",
        "Frontend Development": "React, Tailwind, TypeScript, Next Js,JavaScript, HTML, CSS, Bootstrap",
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

  // Color palette for different skill categories (adjusted for dark theme)
  const categoryColors = {
    "Backend Development": "bg-purple-900/30 text-purple-300 border-purple-700/50",
    "Frontend Development": "bg-blue-900/30 text-blue-300 border-blue-700/50",
    "Database & Storage": "bg-emerald-900/30 text-emerald-300 border-emerald-700/50",
    "DevOps & Cloud": "bg-amber-900/30 text-amber-300 border-amber-700/50",
    "Architectural Patterns": "bg-indigo-900/30 text-indigo-300 border-indigo-700/50",
    "Soft Skills": "bg-pink-900/30 text-pink-300 border-pink-700/50"
  };

  return (
    <div 
      className="w-full min-h-screen max-w-6xl mx-auto px-4 py-16 flex flex-col items-center justify-start bg-[#171717]"
      id="skills"
    >
      {/* Header section with gradient text */}
      <div className="w-full text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Technical Skills
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          My <span className="font-semibold text-blue-400">technical expertise</span> and <span className="font-semibold text-purple-400">areas of interest</span>
        </p>
      </div>

      {/* Skills Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {Object.entries(skillsData.skills[0]).map(([category, skills]) => (
          <div 
            key={category} 
            className={`border rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${categoryColors[category]} hover:bg-opacity-40`}
          >
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${categoryColors[category].replace('300', '400').replace('900/30', '800/50')}`}>
                <span className="text-white">{category.split(' ')[0].charAt(0)}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{category}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {skills.split(', ').map((skill, index) => (
                <li 
                  key={index} 
                  className={`px-3 py-1 rounded-full text-sm ${categoryColors[category].replace('300', '200').replace('900/30', '800/50')} border border-opacity-30`}
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
        <h3 className="text-2xl font-semibold mb-6 text-center text-white">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Passions</span> & Interests
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skillsData.interests.map((interest, index) => {
            const colors = [
              "bg-blue-900/50 text-blue-200 border border-blue-700/30",
              "bg-purple-900/50 text-purple-200 border border-purple-700/30",
              "bg-emerald-900/50 text-emerald-200 border border-emerald-700/30",
              "bg-amber-900/50 text-amber-200 border border-amber-700/30",
              "bg-pink-900/50 text-pink-200 border border-pink-700/30"
            ];
            return (
              <span 
                key={index} 
                className={`px-4 py-2 rounded-full font-medium ${colors[index % colors.length]} hover:bg-opacity-70 transition-colors`}
              >
                {interest}
              </span>
            );
          })}
        </div>
      </div>

      {/* Decorative elements (more subtle for dark theme) */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-900/20 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-900/20 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
    </div>
  );
};

export default Skill;