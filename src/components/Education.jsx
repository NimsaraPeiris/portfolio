import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

          <div className="max-w-3xl mx-auto space-y-8 pb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">G C E Advanced Level Examination</h3>
              <p className="text-primary-600">R/Kuruwita Central College</p>
              <p className="text-gray-600">2018 - 2020</p>
              <ul className="mt-4 list-disc list-inside text-gray-600">
                <li>Graduated with First Class Honours</li>
                <li>Specialized in Software Engineering</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Bachelor of Science in Software Engineering</h3>
              <p className="text-primary-600">SLTC Research University</p>
              <p className="text-gray-600">2022 - 2026</p>
              <ul className="mt-4 list-disc list-inside text-gray-600">
                <li>Graduated with First Class Honours</li>
                <li>Specialized in Software Engineering</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}