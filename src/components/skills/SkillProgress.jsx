import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SkillProgress({ name, level, delay }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="text-gray-600">{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay }}
          className="bg-primary-500 h-2 rounded-full"
        />
      </div>
    </div>
  );
}