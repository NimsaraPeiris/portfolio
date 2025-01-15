import { useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroImg from '../assets/hero.png'; // Import the hero image
import SolidBento from './SolidBento';
import LogoSlider from './LogoSlider';


export default function Hero() {
  const [showPopper, setShowPopper] = useState(false);
  const { ref, inView } = useInView();
  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 500], [0.1, 0]);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-950 pt-16 transition-colors duration-200 md:pt-16">
        <div className="absolute top-12 left-0 flex justify-center w-full h-full text-[clamp(40px,10vw,200px)] font-bold z-10 select-none">
          <span className=" opacity-10 hover:opacity-50 duration-700 custom-font">
            NIMSARA 
          </span>
          <span className="text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text opacity-10">
            -
          </span>
          <span className="opacity-50 duration-700 md:left-40 custom-font">
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
          className="absolute w-full h-full object-cover z-0 select-none left-1/2"
          style={{
            scale,
            opacity,
            top: '180px',
            width: '50%', // reduce the width to 50%
            height: 'auto', // maintain the aspect ratio
            left: '50%', // move the image 50% to the right
            transform: 'translateX(-50%)',
          }}
        />
      </section>
      <LogoSlider />
      <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-neutral-900 transition-colors duration-200">
      </section>
    </>
  );
}