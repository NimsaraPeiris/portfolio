import { motion } from 'framer-motion';

export default function Achievements() {
    return (
        <section id='Achievements' className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"><hr className="my-3 border-gray-200 dark:border-gray-700"/>
            <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            </div>
            <div className="container mx-auto px-6">
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <img
                        src="../../projects/yatraa.png"
                        alt="Project preview"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6 dark:bg-gray-800 transition-colors duration-200">
                        <h3 className="text-xl font-semibold mb-2">Update thiss</h3>
                        <p className="text-gray-500 mb-4">
                            A full-stack web application for booking and managing trips.
                        </p>
                        <button className="text-primary-500 hover:text-primary-600">
                            Learn More →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}