import React from 'react';
import whoDesktop from './Who-a.png';
import CV from './UtsavNepal-Tech-CV.pdf';
import { IoDocumentTextOutline, IoMailOutline } from 'react-icons/io5';
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Typewriter from '../Typewriter';

const SOCIALS = [
  { href: 'https://www.facebook.com/utsav.simpleguy', icon: <FaFacebook />, label: 'Facebook' },
  { href: 'https://github.com/UtsavNepal', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://www.instagram.com/mr.utsavnepal__/', icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/utsav-npl-153409289/', icon: <FaLinkedin />, label: 'LinkedIn' },
];

const AboutMe = ({ onContact }) => {
  return (
    <section id="about" className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-atelier" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
        aria-hidden
      />

      <div className="absolute inset-0 md:hidden overflow-hidden" aria-hidden>
        <img
          src={whoDesktop}
          alt=""
          className="h-full w-full object-cover object-[center_18%] scale-[1.12] origin-[center_18%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/20" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 md:grid-cols-12 items-end md:items-center px-5 sm:px-8 lg:px-12 pt-24 pb-12 md:py-0 gap-8">
        {/* Portrait — left on desktop */}
        <div className="hidden md:block md:col-span-6 lg:col-span-7 order-1 relative h-[78vh] min-h-[520px]">
          <div className="absolute inset-0 overflow-hidden bg-night flex items-center justify-center">
            <img
              src={whoDesktop}
              alt="Utsav Nepal"
              className="h-full w-full object-contain object-center scale-[1.1] origin-center"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-night via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Copy — right on desktop */}
        <div className="md:col-span-6 lg:col-span-5 order-2">
          <p className="section-kicker">Full Stack Developer · Hetauda</p>

          <Typewriter
            as="h1"
            text={'Utsav\nNepal'}
            speed={120}
            deleteSpeed={60}
            startDelay={400}
            holdDelay={2000}
            loop
            className="font-display text-[clamp(3rem,8vw,5.5rem)] leading-[0.92] font-semibold text-cream mb-5 min-h-[1.9em] block"
            aria-label="Utsav Nepal"
          />

          <div className="h-px w-16 bg-gold mb-6" />

          <p className="text-cream-mute text-base sm:text-lg leading-relaxed max-w-md mb-8">
            I design and ship web products with React, .NET, and Next.js — plus NestJS, Expo, PostgreSQL, and Google crawling.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <button type="button" onClick={onContact} className="btn-primary">
              <IoMailOutline className="text-lg" />
              Get in touch
            </button>
            <a href={CV} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <IoDocumentTextOutline className="text-lg" />
              Download CV
            </a>
          </div>

          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-cream-mute hover:text-gold transition-colors text-lg p-1"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
