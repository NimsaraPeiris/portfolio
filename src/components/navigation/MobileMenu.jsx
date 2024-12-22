import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function MobileMenu({ isOpen, menuItems, onItemClick }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:hidden mt-4"
    >
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `block py-2 transition-colors ${
              isActive
                ? 'text-primary-600 font-semibold'
                : 'text-gray-600 hover:text-primary-600'
            }`
          }
          onClick={onItemClick}
        >
          {item.name}
        </NavLink>
      ))}
    </motion.div>
  );
}