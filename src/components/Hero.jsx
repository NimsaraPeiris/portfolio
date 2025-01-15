import { useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroImg from '../assets/hero.png'; // Import the hero image
import LogoSlider from './LogoSlider';
import SolidBento from './SolidBento';

export default function Hero() {
  const [showPopper, setShowPopper] = useState(false);
  const { ref, inView } = useInView();
  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 300], [0.2, 0]);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-950 pt-16 transition-colors duration-200">
        <div className="absolute top-12 left-0 flex justify-center w-full h-full text-[clamp(40px,10vw,200px)] font-bold z-10 select-none">
          <span className="text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text opacity-10 hover:opacity-100 duration-700">
            NIMSARA 
          </span>
          <span className="text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text opacity-10">
            -
          </span>
          <span className="text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text opacity-10 hover:opacity-100 duration-700 md:left-40">
            PEIRIS
          </span>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="absolute top-1/2 md:left-20 transform -translate-x-1/2 -translate-y-1/2 z-10 max-w-5xl mx-auto"
        >
          <SolidBento />
        </motion.div>

        <motion.img
          src={HeroImg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0 select-none"
          style={{
            scale,
            opacity,
            top: '270px', // Adjust the top property to bring the image down
            width: '40%', // reduce the width to 50%
            height: 'auto', // maintain the aspect ratio
            left: '50%', // move the image 50% to the right
            transform: 'translateX(-50%)',
          }}
        />
      </section>

      <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-neutral-900 pt-16 transition-colors duration-200">
        <LogoSlider /> {/* Add the LogoSlider component here */}
      </section>
    </>
  );
}