import React from 'react';

const skills = {
  Backend: ['.NET (C#)', 'NestJS', 'Django', 'FastAPI', 'Express.js'],
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Expo', 'JavaScript'],
  Database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Stored Procedures'],
  DevOps: ['Docker', 'Jenkins', 'Kubernetes', 'Git'],
  Architecture: ['Clean Architecture', 'CQRS', 'MediatR', 'Repository Pattern'],
  'Data & Automation': ['Google Crawling', 'Data Enrichment'],
};

const interests = [
  'Cloud Infrastructure',
  'Microservices',
  'System Design',
  'CI/CD Pipelines',
  'Web Crawling',
];

const Skill = () => (
  <section id="skills" className="section-pad">
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 max-w-xl">
        <p className="section-kicker">Toolkit</p>
        <h2 className="section-title mb-3">Skills</h2>
        <p className="text-cream-mute text-base leading-relaxed">
          Languages, frameworks, and patterns I use to design and deliver software.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-night-line border border-night-line">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="bg-night p-6 sm:p-7">
            <h3 className="font-display text-xl text-cream mb-4">{category}</h3>
            <ul className="space-y-2">
              {list.map((skill) => (
                <li key={skill} className="text-sm text-cream-mute flex items-center gap-2">
                  <span className="h-px w-3 bg-gold/60" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <p className="text-xs uppercase tracking-[0.18em] text-cream-mute mb-4">Currently exploring</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {interests.map((item) => (
            <span key={item} className="text-sm text-gold/90">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skill;
