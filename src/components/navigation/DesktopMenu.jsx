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
                ? 'text-primary-500 font-semibold'
                : 'text-gray-500 hover:text-primary-600'
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}