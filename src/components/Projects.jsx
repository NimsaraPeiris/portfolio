import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Project preview"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                <p className="text-gray-600 mb-4">
                  Brief description of the project and its key features.
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