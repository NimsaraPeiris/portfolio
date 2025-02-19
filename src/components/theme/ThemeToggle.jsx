import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-1/2 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 -translate-y-1/2"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <FaSun className="w-5 h-5 text-gray-500" />
            ) : (
                <FaMoon className="w-5 h-5 text-gray-700" />
            )}
        </button>
    );
}