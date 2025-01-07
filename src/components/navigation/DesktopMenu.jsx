import { NavLink } from 'react-router-dom';

export default function DesktopMenu({ menuItems }) {
  return (
    <div className="hidden md:flex space-x-8">
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `transition-colors ${
              isActive
                ? 'text-white font-semibold'
                : 'text-gray-400 hover:text-white'
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}