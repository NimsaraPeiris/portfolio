import { motion } from 'framer-motion';
import { useState } from 'react';
import CVPopper from './hero/CVPopper';

export default function Hero() {

  const [showPopper, setShowPopper] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-16 transition-colors duration-200">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="relative w-48 h-48 mx-auto">
            <img
              src="../projects/avatar.png"
              alt="Profile"
              className="rounded-full w-full h-full object-cover shadow-lg"
            />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            </div><br />
            <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm">
              Available for hire
            </span>
          </div><br /><br />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Nimsara Peiris</h1>
            <h2 className="text-xl text-primary-600">Software Engineering Undergraduate</h2>
            <p className="max-w-2xl mx-auto text-gray-500">
              Passionate developer with 5 years of experience in building web applications.
              Specializing in React, Node.js, and cloud technologies.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <div className="relative">
              <button
                className="bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors hover:scale-105 transition duration-150 ease-in-out delay-150"
                onClick={() => setShowPopper(true)}
                onMouseEnter={() => setShowPopper(true)}
                onMouseLeave={() => setShowPopper(false)}
              >
                Download CV
              </button>
              <CVPopper show={showPopper} />
            </div>
            <a href="/contact"><button className="border-2 border-primary-500 text-primary-500 px-6 py-2 rounded-full hover:border-gray-900 hover:text-white transition-colors hover:scale-105 delay-150">
              Contact Me
            </button></a>
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
        </motion.div>
      </div>

    </section>

  );
}