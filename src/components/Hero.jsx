import { motion } from 'framer-motion';
import { useState } from 'react';
import CVPopper from './hero/CVPopper';
import HeroImg from '../assets/hero.png'; // Import the hero image

export default function Hero() {

  const [showPopper, setShowPopper] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-950 pt-16 transition-colors duration-200">

      <div
        className="absolute top-12 left-0 flex justify-center w-full h-full text-[clamp(40px,10vw,200px)] font-bold z-0"
      >
        <span className="text-black dark:text-white">NIMSARA-</span>
        <span className="text-teal-500">PEIRIS</span>
      </div>
      <div className='absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10'>
        <div className="text-3xl font-normal text-white mt-4">
          Software Engineering Undergraduate
        </div>
        <div className="text-lg font-normal text-white mt-2">
          Passionate developer with 5 years of experience in building web applications.
        </div>
        <div className="text-lg font-normal text-white mt-2">
          Specializing in React, Node.js, and cloud technologies.
        </div>
      </div>

      <img
        src={HeroImg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        style={{
          top: '80px',
          width: '30%', // reduce the width to 50%
          height: 'auto', // maintain the aspect ratio
          left: '50%', // move the image 50% to the right
          transform: 'translateX(-50%)', // move the image 50% to the left to center it
        }}
      />
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 relative"
        >


        </motion.div>
      </div>
    </section>
  );
}