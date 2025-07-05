import React from "react";
import who from './Who.png';
import CV from './CV.pdf';
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdWorkOutline, MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const AboutMe = () => {
  const handleGetInTouch = () => {
    window.open("https://mail.google.com/mail/u/0/?to=utsavnepal021@gmail.com&fs=1&tf=cm");
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto md:h-screen flex items-center bg-[#D7D7D7]" id="about">
      <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center w-full">
        {/* Left Column - Image and Download */}
        <div className="space-y-6 flex flex-col items-center lg:items-start">
          <div className="relative">
            <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 shadow-2xl border-4 border-black hover:shadow-black hover:shadow-xl transition-all">
              <img src={who} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
          </div>

          <div className="flex items-center gap-3">
            <IoLocationOutline className="w-5 h-5 text-gray-800" />
            <span className="text-gray-800">Hetauda, Nepal</span>
          </div>

          <div>
            <button
              onClick={() => window.open(CV, "_blank")}
              className="flex items-center bg-black text-white px-4 py-2 rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-900 transition-all"
            >
              Download CV <IoDocumentTextOutline className="ml-2" />
            </button>
          </div>
        </div>

        {/* Right Column - About Content */}
        <div className="space-y-6 md:space-y-9 flex flex-col justify-center">
          <div className="bg-[#D7D7D7] rounded-lg p-6">
            <h1 className="text-4xl font-bold text-black mb-2">Hi, I'm Utsav Nepal</h1>
            <h2 className="text-xl text-gray-800 mb-6">Full-Stack Developer & DevOps Enthusiast</h2>
            <p className="text-gray-800 leading-relaxed">
              I'm a Full-Stack Developer exploring DevOps with a strong interest in modern tools and practices. Curious and driven, I'm always learning and sharpening my skills to build better systems.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-lg border-4 border-black hover:shadow-black hover:shadow-xl transition-all">
            <h3 className="text-lg font-semibold text-black mb-2">Let's work together!</h3>
            <p className="text-gray-800 mb-4">I'm always interested in new opportunities and exciting projects.</p>
            <button
              onClick={handleGetInTouch}
              className="flex items-center bg-black text-white px-4 py-2 rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-900 transition-all"
            >
              Get In Touch <MdOutlineMailOutline className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;