import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="relative w-48 h-48 mx-auto">
            <img
              src="https://via.placeholder.com/192"
              alt="Profile"
              className="rounded-full w-full h-full object-cover shadow-lg"
            />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm">
                Available for hire
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold">John Doe</h1>
            <h2 className="text-xl text-primary-600">Full Stack Developer</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Passionate developer with 5 years of experience in building web applications.
              Specializing in React, Node.js, and cloud technologies.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <button className="bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors">
              Download CV
            </button>
            <button className="border-2 border-primary-500 text-primary-500 px-6 py-2 rounded-full hover:bg-primary-50 transition-colors">
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}