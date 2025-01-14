import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { menuItems } from './navigation/menuItems';
import DesktopMenu from './navigation/DesktopMenu';
import MobileMenu from './navigation/MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 z-50 bg-transparent backdrop-blur-sm transition-colors duration-100">
      <nav className="container py-10">
        <div className="flex items-center justify-between ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.8, x: 0 }}
          >
            <NavLink to="/" className="text-4xl font-bold text-black dark:text-white px-20 ">
              <span className="text-black dark:text-white">NiMsArA</span>
              <span className="text-teal-500">/</span>
            </NavLink>
          </motion.div>

          <DesktopMenu menuItems={menuItems} />

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <MobileMenu 
          isOpen={isMenuOpen}
          menuItems={menuItems}
          onItemClick={() => setIsMenuOpen(false)}
        />
      </nav>
    </header>
  );
}