import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SocialLinks from './contact/SocialLinks';
import ContactForm from './contact/ContactForm';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <SocialLinks />
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}