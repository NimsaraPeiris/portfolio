import { motion } from 'framer-motion';
import { useState } from 'react';
import CVPopper from './hero/CVPopper';

export default function Hero() {

  const [showPopper, setShowPopper] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-950 pt-16 transition-colors duration-200">
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
              className="rounded-full w-full h-full object-cover"
            />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center">
              <span className="text-black dark:text-white px-4 py-1 rounded-full relative flex items-center justify-center gap-3 bg-gray-50 dark:bg-black transition-colors duration-200">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 dark:bg-red-500 opacity-75"></span>
                
                </span>
                L F O
              </span>
            </div>


          </div>
          <div className="space-y-4">
            <h1 className="text-6xl font-bold">NIMSARA PEIRIS</h1>
            <h2 className="text-xl text-orange-500">Software Engineering Undergraduate</h2>
            <p className="max-w-2xl text-gray-500 mx-auto text-gray-500">
              Passionate developer with 5 years of experience in building web applications.
              Specializing in React, Node.js, and cloud technologies.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <div className="relative">
              <button
                className="bg-primary-500 text-white px-9 py-9 rounded-full hover:bg-gray-900 transition-colors transition ease-in-out delay-300 dark:bg-white flex items-center justify-center dark:hover:text-black"
                onClick={() => setShowPopper(true)}
                onMouseEnter={() => setShowPopper(true)}
                onMouseLeave={() => setShowPopper(false)}
              >
                Download CV
              </button>
              <CVPopper show={showPopper} />
            </div>
            <a href="/contact">
              <button className="text-primary-500 px-4 py-9 rounded-full  hover:text-white transition-colors delay-300 flex items-center justify-center dark:bg-white dark:text-white dark:hover:text-black">
                Catch Me
              </button>
            </a>


          </div>
        </motion.div>
      </div>

    </section>

  );
}