import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Example experience item */}
            <div className="flex gap-4">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src="https://via.placeholder.com/64"
                  alt="Company logo"
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="text-primary-600">Imprezit</p>
                <p className="text-gray-400">2023 - Present</p>
                <p className="mt-2">
                  Led development of multiple full-stack applications using React and Node.js.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}