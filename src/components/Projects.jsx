import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-colors duration-100">
              <img
                src="../../projects/yatraa.png"
                alt="Project preview"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">YATRAA</h3>
                <p className="text-gray-500 mb-4">
                  A full-stack web application for booking and managing trips.
                </p>
                <button className="text-primary-500 hover:text-primary-600">
                  Learn More →
                </button>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-colors duration-100">
              <img
                src="../../projects/fattygo.png"
                alt="Project preview"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">FattyGo</h3>
                <p className="text-gray-500 mb-4">
                Fattygo is a nutrition app predicting fat-related risks and offering personalized health solutions.
                </p>
                <button className="text-primary-500 hover:text-primary-600">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}