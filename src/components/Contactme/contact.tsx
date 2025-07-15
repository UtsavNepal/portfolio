import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoLocationSharp, IoMail, IoCall } from 'react-icons/io5';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);


    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);


    emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formData
)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const socialLinks = [
    { href: "https://www.facebook.com/utsav.simpleguy", icon: <FaFacebook />, name: "Facebook" },
    { href: "https://github.com/UtsavNepal", icon: <FaGithub />, name: "GitHub" },
    { href: "https://www.instagram.com/mr.utsavnepal__/", icon: <FaInstagram />, name: "Instagram" },
    { href: "https://www.linkedin.com/in/utsav-npl-153409289/", icon: <FaLinkedin />, name: "LinkedIn" }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-12" style={{ backgroundColor: '#171717' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Contact Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <div className="flex items-center justify-between">
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-sm">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-md font-medium shadow-md transition duration-300 ${
                    isSubmitting 
                      ? 'bg-blue-700 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="w-full lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-blue-400 mt-1">
                  <IoMail className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-300">Email</h4>
                  <a 
                    href="mailto:utsavnepal21@gmail.com" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    utsavnepal21@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-blue-400 mt-1">
                  <IoCall className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-300">Phone</h4>
                  <a 
                    href="tel:+9779821818139" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    +977 9821818139
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-blue-400 mt-1">
                  <IoLocationSharp className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-300">Location</h4>
                  <p className="text-gray-400">Hetauda, Nepal</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-medium text-lg mb-4 text-gray-300">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white p-3 rounded-full transition duration-300 shadow-sm"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-700 rounded-lg border border-gray-600">
              <h4 className="font-medium text-lg mb-2 text-gray-300">Availability</h4>
              <p className="text-gray-400">
                I'm currently available for freelance work and new opportunities. 
                Feel free to reach out for collaborations!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
