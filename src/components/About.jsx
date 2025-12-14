import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Users, Sparkles } from 'lucide-react';

const About = () => {
    const cards = [
        {
            icon: <Layers className="w-8 h-8 text-primary" />,
            title: "Fullstack Developer",
            desc: "Experienced in building robust web applications using React, Next.js, and Laravel/PHP."
        },
        {
            icon: <Users className="w-8 h-8 text-secondary" />,
            title: "Organizational Leader",
            desc: "Proven track record in leading teams, managing complex events, and driving strategic initiatives."
        },
        {
            icon: <Sparkles className="w-8 h-8 text-orange-400" />,
            title: "Effective Communicator",
            desc: "Strong public relations skills, capable of fostering collaboration and diverse teamwork."
        }
    ];

    return (
        <section id="about" className="py-20 bg-slate-50 dark:bg-dark relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                            I am a 7th-semester Informatics Engineering Student with a passion for Fullstack Development. My practical experience includes a tenure as a <span className="text-primary font-medium">Fullstack Web Developer Intern at RSMH</span>, where I built attendance systems using Laravel.
                        </p>
                        <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed">
                            Beyond coding, I am an active leader in the campus community. I currently serve in strategic roles at <span className="text-primary font-medium">GDGoC</span>, <span className="text-primary font-medium">BEM KM</span>, and <span className="text-primary font-medium">ILKOM SPORT</span>. Previously, I have successfully led various major campus events and strategic initiatives.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-slate-200 dark:border-gray-700 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md backdrop-blur-sm"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-100 dark:bg-gray-900 rounded-lg">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                                        <p className="text-slate-600 dark:text-gray-400">{card.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
