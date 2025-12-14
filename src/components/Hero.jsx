import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

// IMPORTANT: This imports the image from src/assets/image.png
// Ensure your file is named 'image.png' and is located in the 'src/assets' folder.
import profileImg from '../assets/gambar_saya-removebg-preview.png';

// Typewriter Component
const Typewriter = ({ text, delay = 100, startDelay = 0 }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    // Initial start delay
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentIndex(0);
            setCurrentText('');
        }, startDelay);
        return () => clearTimeout(timeout);
    }, [startDelay]);

    return <span>{currentText}</span>;
};

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-dark transition-colors duration-300 pt-20">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                    {/* Left Side: Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-xl md:text-2xl text-primary font-medium mb-4 min-h-[1.5em]">
                                <Typewriter text="Hello, I'm" delay={100} />
                                <span className="animate-pulse">|</span>
                            </h2>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight text-glow leading-tight">
                                Naufal Nazhif <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Almaulidzar</span>
                            </h1>
                            <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0"> I am an Informatics Engineering student with a strong interest in modern web development, especially in Frontend technologies like ReactJS. My active involvement in student organizations—including roles in sports, talent development, and internal inspection—has equipped me with solid leadership, coordination, and problem-solving capabilities. This combination of technical and soft skills forms the foundation of my work in the tech field. </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="flex flex-wrap justify-center md:justify-start gap-4 mb-12"
                        >
                            <a href="#contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg shadow-primary/25">
                                Contact Me
                            </a>
                            <a href="#projects" className="bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-slate-900 dark:text-white px-8 py-3 rounded-full font-medium backdrop-blur-sm transition-colors border border-slate-200 dark:border-white/10 shadow-sm">
                                View Work
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex justify-center md:justify-start gap-6 text-slate-400 dark:text-gray-400"
                        >
                            <a href="https://github.com/falzyyyy" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-white transition-colors"><Github size={24} /></a>
                            <a href="https://www.linkedin.com/in/naufalnazhifff/" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-white transition-colors"><Linkedin size={24} /></a>
                            <a href="mailto:naufalnazhif3@gmail.com" className="hover:text-primary dark:hover:text-white transition-colors"><Mail size={24} /></a>
                        </motion.div>
                    </div>

                    {/* Right Side: Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 flex justify-center md:justify-end"
                    >
                        <div className="relative w-72 h-72 md:w-[32rem] md:h-[32rem] flex items-center justify-center">
                            {/* Glow Effect behind image (Optional, makes it pop) */}
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] opacity-20 animate-pulse"></div>

                            {/* 
                                THE PROFILE IMAGE
                                - src={profileImg}: points to import at the top
                                - object-contain: ensures full image is visible without cropping
                                - drop-shadow: adds shadow to the image contour
                            */}
                            <img
                                src={profileImg}
                                alt="Naufal Nazhif Almaulidzar"
                                className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-gray-500 hidden md:block"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
