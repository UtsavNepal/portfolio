import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import data from './data';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredData = filter === 'All' ? data : data.filter(item => item.cat === filter);

  const categoryStyles = {
    Fullstack: {
      bg: 'bg-gradient-to-br from-purple-500 to-blue-600',
      text: 'text-purple-100'
    },
    Frontend: {
      bg: 'bg-gradient-to-br from-amber-400 to-orange-500',
      text: 'text-amber-100'
    },
    Backend: {
      bg: 'bg-gradient-to-br from-green-400 to-blue-500',
      text: 'text-green-100'
    },
    Devops: {
      bg: 'bg-gradient-to-br from-emerald-400 to-cyan-500',
      text: 'text-emerald-100'
    }
  };

  return (
    <div id="projects" className="min-h-screen py-20 px-4 sm:px-8 lg:px-16" style={{ backgroundColor: '#171717' }}>
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
        </motion.h2>
        <p className="text-gray-400 text-lg">Explore my technical implementations and solutions</p>
      </div>

      {/* Filter buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {['All', 'Fullstack', 'Frontend','Backend','Devops'].map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat 
                ? cat === 'All' 
                  ? 'bg-white text-gray-900' 
                  : `${categoryStyles[cat]?.bg || 'bg-gray-700'} text-white`
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects grid - New Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredData.map((item, index) => {
          const categoryStyle = categoryStyles[item.cat] || { bg: 'bg-gray-700', text: 'text-gray-100' };
          
          return (
            <motion.div
              key={`${item.id}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className={`h-full rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 ${hoveredCard === index ? 'shadow-xl shadow-blue-900/20' : ''}`}>
                {/* Image container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category label */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${categoryStyle.bg} text-white shadow-md`}>
                    {item.cat}
                  </div>
                </div>

                {/* Content area */}
                <div className="p-6 bg-gray-900">
                  {/* Prominent Title */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {item.title}
                  </h3>
                  
                  {/* Action buttons */}
                  <div className="flex gap-3 mt-4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${categoryStyle.bg} text-white hover:opacity-90`}
                    >
                      <span>View</span>
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-700 transition-all"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              {hoveredCard === index && (
                <div className={`absolute inset-0 rounded-xl pointer-events-none ${categoryStyle.bg} opacity-10 blur-md -z-10`} />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Empty state */}
      {filteredData.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 col-span-full"
        >
          <p className="text-gray-500 text-lg">No projects found in this category</p>
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;