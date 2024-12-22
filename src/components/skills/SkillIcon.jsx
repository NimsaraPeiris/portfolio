import { FaReact, FaNodeJs, FaDatabase, FaCloud } from 'react-icons/fa';

const icons = {
  frontend: <FaReact className="w-8 h-8" />,
  backend: <FaNodeJs className="w-8 h-8" />,
  database: <FaDatabase className="w-8 h-8" />,
  cloud: <FaCloud className="w-8 h-8" />
};

export default function SkillIcon({ type }) {
  return (
    <div className="text-primary-500">
      {icons[type.toLowerCase()]}
    </div>
  );
}