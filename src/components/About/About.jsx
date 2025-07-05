import React from "react";
import who from './Who.jpg';
import CV from './CV.pdf';
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdWorkOutline, MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const AboutMe = () => {
  const handleGetInTouch = () => {
    window.open("https://mail.google.com/mail/u/0/?to=utsavnepal021@gmail.com&fs=1&tf=cm");
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto md:h-screen" id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
        {/* Left Column - Image and Download */}
        <div className="space-y-6 flex flex-col items-center lg:items-start">
          <div className="relative">
            <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 shadow-2xl border-2 border-black">
              <img src={who} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
          </div>

          <div className="flex items-center gap-3">
            <IoLocationOutline className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700">Hetauda, Nepal</span>
          </div>

          <div>
            <button
              onClick={() => window.open(CV, "_blank")}
              className="flex items-center bg-black text-white px-4 py-2 rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-900"
            >
              Download CV <IoDocumentTextOutline className="ml-2" />
            </button>
          </div>
        </div>

        {/* Right Column - About Content */}
        <div className="space-y-9 flex flex-col justify-center h-full">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Hi, I'm Utsav Nepal</h1>
            <h2 className="text-xl text-gray-600 mb-6">Full-Stack Developer & DevOps Enthusiast</h2>
            <p className="text-gray-700 leading-relaxed">
              I'm a Full-Stack Developer exploring DevOps with a strong interest in modern tools and practices.
              Curious and driven, I'm always learning and sharpening my skills to build better systems.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Let's work together!</h3>
            <p className="text-gray-600 mb-4">I'm always interested in new opportunities and exciting projects.</p>
            <button
              onClick={handleGetInTouch}
              className="flex items-center bg-black text-white px-4 py-2 rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-900"
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
