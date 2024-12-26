import { motion, AnimatePresence } from 'framer-motion';

export default function CVPopper({ show }) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 
                    px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 
                    text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap"
                >
                    <div className="relative">
                        Click to download my CV
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full
                        border-8 border-transparent border-t-white dark:border-t-gray-800" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}