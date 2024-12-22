import SkillIcon from './SkillIcon';
import SkillProgress from './SkillProgress';

export default function SkillCard({ category, items, type, index }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-4 mb-6">
        <SkillIcon type={type} />
        <h3 className="text-xl font-semibold">{category}</h3>
      </div>
      
      <div className="space-y-4">
        {items.map((skill) => (
          <SkillProgress 
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
}