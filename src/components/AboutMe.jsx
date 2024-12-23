import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Achievements from './Achievements';

export default function AboutMe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden">
                  <img
                    src="../projects/avatar.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>



            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">Hi, I'm Nimsara</h1>

              <h2 className="text-2xl text-primary-600 mb-6">Full Stack Developer</h2>
              <div className="-bottom-4 -right-4 bg-primary-500 text-white px-6 py-2 rounded-full w-fit">
                Available for hire
              </div><br />

              <p className="text-gray-600 mb-6">
                I'm a passionate developer with 5 years of experience in building web applications.
                I specialize in React, Node.js, and cloud technologies. When I'm not coding,
                you'll find me contributing to open source projects or mentoring junior developers.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors">
                  Download CV
                </button>
                <a href="/contact">
                <button className="border-2 border-primary-500 text-primary-500 px-6 py-2 rounded-full hover:bg-primary-50 transition-colors">
                  Contact Me
                </button></a>
              </div>
            </div>
          </div>
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
}