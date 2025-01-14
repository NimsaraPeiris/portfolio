import { NavLink } from 'react-router-dom';

export default function DesktopMenu({ menuItems }) {
  return (
    <div className="hidden md:flex space-x-8 ml-auto mx-5 gap-6">
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `text-2xl transition-colors ${
              isActive
                ? 'text-black dark:text-white font-semibold'
                : 'text-gray-400 hover:text-black dark:hover:text-white'
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}