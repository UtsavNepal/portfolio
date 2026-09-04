import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import data from './data';

const categories = ['All', 'Fullstack', 'Frontend', 'Backend', 'Devops'];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? data : data.filter((d) => d.cat === filter);

  return (
    <section id="projects" className="section-pad bg-night-raised/40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-xl">
          <p className="section-kicker">Selected work</p>
          <h2 className="section-title mb-3">Projects</h2>
          <p className="text-cream-mute text-base leading-relaxed">
            Builds across fullstack, frontend, backend, and DevOps. Some are still evolving.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                filter === cat
                  ? 'bg-gold text-night'
                  : 'border border-night-line text-cream-mute hover:text-cream hover:border-gold/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filtered.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-4 bg-night-soft">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.16em] text-gold">
                  {item.cat}
                </span>
              </div>

              <h3 className="font-display text-2xl text-cream font-semibold mb-1.5 group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              {item.blurb && (
                <p className="text-cream-mute text-sm leading-relaxed mb-3 max-w-md">{item.blurb}</p>
              )}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-soft transition-colors"
              >
                {item.linkLabel || 'View'}
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-cream-mute py-16 text-center">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
