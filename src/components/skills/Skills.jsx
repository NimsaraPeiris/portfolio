import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillCard from './SkillCard';
import { skillsData } from './skillsData';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((skill, index) => (
              <SkillCard 
                key={skill.category}
                {...skill}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}