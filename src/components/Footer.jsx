import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-dark py-8 border-t border-slate-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-slate-500 dark:text-gray-500 text-sm">
                    © {new Date().getFullYear()} Naufal. Built with React & Tailwind.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
