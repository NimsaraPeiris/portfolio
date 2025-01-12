import { motion } from 'framer-motion';
import { useState } from 'react';
import CVPopper from './hero/CVPopper';
import HeroImg from '../assets/hero.png'; // Import the hero image

export default function Hero() {

  const [showPopper, setShowPopper] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-950 pt-16 transition-colors duration-200">
        <img
        src={HeroImg}
        alt="Hero Background"
        className="absolute inset-x-0 w-full h-full object-cover opacity-50 z-0"
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