import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Code, Cpu, Server, Database } from 'lucide-react';

const ExperienceItem = ({ role, company, location, date, description, techStack, index }) => (
  <motion.div
    className="bg-gray-800 text-white p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all group relative overflow-hidden"
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.3, once: true }}
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.2,
          duration: 0.6,
          ease: 'easeOut',
        },
      }),
    }}
  >
    {/* Glow effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    
    {/* Header */}
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{role}</h3>
        <p className="text-base sm:text-lg text-blue-400">{company}</p>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
        <span className="flex items-center text-xs sm:text-sm bg-gray-700 text-gray-300 px-2 sm:px-3 py-1 rounded-full">
          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" /> {location}
        </span>
        <span className="flex items-center text-xs sm:text-sm bg-gray-700 text-gray-300 px-2 sm:px-3 py-1 rounded-full">
          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" /> {date}
        </span>
      </div>
    </div>
    {/* Description */}
    <p className="text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed text-sm sm:text-base">{description}</p>
    {/* Tech Stack */}
    <div>
      <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2 sm:mb-3 flex items-center">
        <Code className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" /> TECH STACK
      </h4>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {techStack.map((tech, i) => (
          <span 
            key={i} 
            className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-200 text-xs sm:text-sm rounded-full flex items-center"
          >
            {tech === 'React' && <Cpu className="h-3 w-3 mr-1 text-blue-400" />}
            {tech === '.Net' && <Server className="h-3 w-3 mr-1 text-purple-400" />}
            {tech === 'SQl' && <Database className="h-3 w-3 mr-1 text-emerald-400" />}
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Kutumba Tech',
      location: 'Hetauda',
      date: 'April 2024 - June 2025',
      description: 'Contributing to Online Health Care System and Logistics system as a full stack developer, building scalable solutions with modern technologies.',
      techStack: ['React', '.Net', 'SQl', 'TypeScript', 'Tailwind', 'Docker'],
    },
    {
      role: 'Full Stack Developer',
      company: 'Avenir Tech',
      location: 'Hetauda',
      date: 'June 2025 - Sep 3 2025',
      description: 'Contributing to Hosting Ho and Tixify as a full stack developer, building scalable solutions with modern technologies.',
      techStack: ['Next js', 'Fast api', 'Postgres', 'TypeScript', 'Tailwind', 'Docker'],
    },
    {
      role: 'Full Stack Engineer',
      company: 'Life Crayon Style',
      location: 'Japan (Remote)',
      date: 'Sep 5 2025 - Present',
      description: 'Working as a full stack engineer, building and maintaining scalable web applications in a fully remote setup.',
      techStack: ['Dotnet', 'React Js', 'Next js','Nest js','Expo go', 'TypeScript', 'Teams', 'Git'],
    },
  ];

  return (
    <div id="experiences" className="text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 lg:px-16" style={{ backgroundColor: '#171717' }}>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Professional Experience
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400">Key roles and technical contributions throughout my career</p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid gap-4 sm:gap-6 md:gap-8">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} index={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;