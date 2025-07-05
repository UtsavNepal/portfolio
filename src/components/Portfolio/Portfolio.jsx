import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import data from './data';

const projectVariants = {
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
};

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const handleClick = (e, link1, link2) => {
    e.preventDefault();
    window.open(link1, '_blank');
    if (link2) window.open(link2, '_blank');
  };

  const filteredData = filter === 'All' ? data : data.filter(item => item.cat === filter);

  return (
    <div id="projects" className="bg-white text-black py-20 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
        <p className="text-gray-700 mt-2 text-lg">Most recent work</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {['All', 'Fullstack', 'Devops', 'Frontend'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`border-2 border-black px-4 py-2 text-sm sm:text-base font-medium rounded-full transition ${
              filter === cat ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {filteredData.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            onClick={(e) => handleClick(e, item.link, item.link2)}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={projectVariants}
          >
            <div className="border-2 border-black hover:shadow-purple-700 hover:shadow-2xl rounded-xl overflow-hidden  hover:scale-[1.02] transition-transform bg-white">
              <div className="h-[160px] sm:h-[180px]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <div className="flex items-center text-sm text-gray-700">
                  <span>Demo</span>
                  <FaArrowUpRightFromSquare className="ml-2" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
