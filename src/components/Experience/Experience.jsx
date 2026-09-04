import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Full Stack Engineer',
    company: 'Life Crayon Style',
    location: 'Japan · Remote',
    date: 'Sep 2025 – Present',
    description:
      'Building web and mobile products remotely — .NET and NestJS backends, React/Next.js/Expo clients, PostgreSQL, and Google crawling workflows for data collection and enrichment.',
    tech: ['.NET', 'React', 'Next.js', 'NestJS', 'PostgreSQL', 'Google Crawling', 'Expo', 'TypeScript', 'Tailwind', 'Docker'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Avenir Tech',
    location: 'Hetauda',
    date: 'Jun 2025 – Sep 2025',
    description:
      'Shipped features for Hosting Ho and Tixify with Next.js, FastAPI, PostgreSQL, and containerized delivery.',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Kutumba Tech',
    location: 'Hetauda',
    date: 'Apr 2024 – Jun 2025',
    description:
      'Delivered features for healthcare and logistics platforms — React UIs, .NET APIs, SQL, and Docker workflows.',
    tech: ['React', '.NET', 'SQL', 'TypeScript', 'Docker'],
  },
];

const Experience = () => (
  <section id="experiences" className="section-pad relative">
    <div className="pointer-events-none absolute inset-0 bg-section-fade" aria-hidden />

    <div className="relative mx-auto max-w-5xl">
      <div className="mb-14 max-w-xl">
        <p className="section-kicker">Career</p>
        <h2 className="section-title mb-3">Experience</h2>
        <p className="text-cream-mute text-base leading-relaxed">
          Product teams where I shipped end-to-end — from interfaces to APIs and delivery.
        </p>
      </div>

      <div className="relative border-l border-night-line pl-6 sm:pl-10 space-y-10">
        {experiences.map((exp, i) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[1.9rem] sm:-left-[2.9rem] top-1.5 h-3 w-3 rounded-full bg-gold ring-4 ring-night" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="font-display text-2xl sm:text-3xl text-cream font-semibold">{exp.role}</h3>
              <span className="text-xs text-cream-mute tracking-wide">{exp.date}</span>
            </div>

            <p className="text-gold text-sm font-medium mb-3">
              {exp.company}
              <span className="text-cream-mute font-normal"> · {exp.location}</span>
            </p>

            <p className="text-cream-mute text-sm sm:text-base leading-relaxed max-w-2xl mb-4">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs text-cream-mute border border-night-line px-2.5 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
