import React, { useState } from 'react';
import Header from './Header/Header';
import About from './About/About';
import Skill from './Skill/Skill';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Footer/Footer';
import Experience from './Experience/Experience';
import Label from './Marquee/Marquee';
import ContactModal from './Contactme/ContactModal';

const Home = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <div className="bg-atelier text-cream relative overflow-x-hidden">
      <Header onContact={openContact} />
      <About onContact={openContact} />
      <Experience />
      <Portfolio />
      <Skill />
      <Label />
      <Footer />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

export default Home;
