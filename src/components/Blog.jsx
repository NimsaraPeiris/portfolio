import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Blog() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Blog post cover"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 dark:bg-gray-900 transition-colors duration-200">
                <h3 className="text-xl font-semibold mb-2">Blog Post Title</h3>
                <p className="text-gray-500 mb-4">
                  Preview of the blog post content goes here...
                </p>
                <button className="text-primary-500 hover:text-primary-600">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}