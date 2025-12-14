import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu, X, Sun, Moon,
    Home, User, Briefcase, Cpu, FolderOpen, Mail
} from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    // Initialize Theme
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    // Toggle Theme Function
    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

    const links = [
        { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
        { name: 'Projects', href: '#projects', icon: <FolderOpen size={20} /> },
        { name: 'Skills', href: '#skills', icon: <Cpu size={20} /> },
        { name: 'Organization', href: '#organization', icon: <Briefcase size={20} /> },
        { name: 'About', href: '#about', icon: <User size={20} /> },
        { name: 'Home', href: '#home', icon: <Home size={20} /> },
    ];

    return (
        <>
            {/* 1. Top Brand Logo (Fixed at Top-Left) */}
            <nav className="fixed w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="pointer-events-auto"
                >
                    <span className="font-bold text-2xl text-primary bg-white/80 dark:bg-dark/80 px-4 py-2 rounded-full backdrop-blur-md shadow-sm">
                        N<span className="text-slate-900 dark:text-white">.</span>
                    </span>
                </motion.div>

                {/* Theme Toggle (Fixed at Top-Right for convenience) */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={toggleTheme}
                    className="pointer-events-auto p-3 bg-white/80 dark:bg-slate-800/80 rounded-full shadow-sm text-slate-900 dark:text-yellow-400 hover:scale-105 transition-transform backdrop-blur-md ring-1 ring-slate-200 dark:ring-slate-700"
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>
            </nav>

            {/* 2. Floating Action Button (Bottom-Right Chat Widget Style) */}
            <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 pointer-events-none">
                <AnimatePresence>
                    {isOpen && (
                        <div className="flex flex-col gap-3 items-end mb-2 pointer-events-auto">
                            {links.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.5 }}
                                    transition={{ delay: index * 0.05, type: 'spring', stiffness: 300, damping: 20 }}
                                    className="flex items-center gap-3 group"
                                >
                                    {/* Tooltip Label */}
                                    <span className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                                        {link.name}
                                    </span>

                                    {/* Icon Button */}
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="p-3 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-700 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 transition-all hover:scale-110"
                                    >
                                        {link.icon}
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </AnimatePresence>

                {/* Main Trigger Button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`pointer-events-auto p-4 rounded-full shadow-xl transition-all duration-300 border-2 ${isOpen
                            ? 'bg-red-500 border-red-400 rotate-90 text-white'
                            : 'bg-primary border-primary/50 text-white animate-bounce-slow'
                        }`}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.button>
            </div>
        </>
    );
};

export default Navbar;
