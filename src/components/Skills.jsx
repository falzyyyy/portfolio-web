import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Skills = () => {
    // Helper to get Simple Icons URL
    const getIcon = (slug) => `https://cdn.simpleicons.org/${slug}`;

    const skills = [
        {
            category: "Frontend",
            items: [
                { name: "JavaScript", icon: getIcon("javascript"), color: "hover:shadow-yellow-400/50 hover:border-yellow-400" },
                { name: "React", icon: getIcon("react"), color: "hover:shadow-cyan-500/50 hover:border-cyan-500" },
                {
                    name: "Next.js",
                    icon: getIcon("nextdotjs"),
                    color: "hover:shadow-slate-400/50 hover:border-slate-400",
                    className: "dark:invert"
                },
                { name: "TypeScript", icon: getIcon("typescript"), color: "hover:shadow-blue-500/50 hover:border-blue-500" },
                { name: "Tailwind CSS", icon: getIcon("tailwindcss"), color: "hover:shadow-cyan-400/50 hover:border-cyan-400" },
                { name: "Bootstrap", icon: getIcon("bootstrap"), color: "hover:shadow-purple-600/50 hover:border-purple-600" }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Python", icon: getIcon("python"), color: "hover:shadow-blue-500/50 hover:border-blue-500" },
                { name: "Java", icon: getIcon("openjdk"), color: "hover:shadow-red-500/50 hover:border-red-500" }, // Using OpenJDK for Java icon
                { name: "Node.js", icon: getIcon("nodedotjs"), color: "hover:shadow-green-500/50 hover:border-green-500" },
                {
                    name: "Express",
                    icon: getIcon("express"),
                    color: "hover:shadow-gray-500/50 hover:border-gray-500",
                    className: "dark:invert"
                },
                { name: "PostgreSQL", icon: getIcon("postgresql"), color: "hover:shadow-blue-400/50 hover:border-blue-400" },
                { name: "Firebase", icon: getIcon("firebase"), color: "hover:shadow-yellow-500/50 hover:border-yellow-500" },
                {
                    name: "Railway",
                    icon: getIcon("railway"),
                    color: "hover:shadow-purple-500/50 hover:border-purple-500",
                    className: "dark:invert"
                }
            ]
        },
        {
            category: "Tools",
            items: [
                { name: "Git", icon: getIcon("git"), color: "hover:shadow-red-500/50 hover:border-red-500" },
                {
                    name: "VS Code",
                    icon: getIcon("visualstudiocode"),
                    color: "hover:shadow-blue-500/50 hover:border-blue-500"
                },
                { name: "Docker", icon: getIcon("docker"), color: "hover:shadow-blue-600/50 hover:border-blue-600" },
                { name: "Postman", icon: getIcon("postman"), color: "hover:shadow-orange-500/50 hover:border-orange-500" },
                {
                    name: "Antigravity",
                    icon: "custom",
                    component: <Rocket size={32} className="text-indigo-500" />,
                    color: "hover:shadow-indigo-500/50 hover:border-indigo-500"
                }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-100 dark:bg-gray-900/30 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-dark p-8 rounded-3xl border border-slate-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center border-b border-slate-100 dark:border-gray-800 pb-4">
                                {skillGroup.category}
                            </h3>

                            <div className="grid grid-cols-3 gap-6 justify-items-center">
                                {skillGroup.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        className={`group flex flex-col items-center gap-3 p-3 rounded-xl border border-transparent transition-all duration-300 ${item.color} bg-slate-50 dark:bg-gray-800/50 w-full`}
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center">
                                            {item.icon === "custom" ? (
                                                item.component
                                            ) : (
                                                <img
                                                    src={item.icon}
                                                    alt={item.name}
                                                    className={`w-10 h-10 object-contain transition-all duration-300 ${item.className || ''}`}
                                                />
                                            )}
                                        </div>
                                        <span className="text-xs font-semibold text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-center">
                                            {item.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
