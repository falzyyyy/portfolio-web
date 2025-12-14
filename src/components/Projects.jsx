import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            desc: "A comprehensive dashboard for managing online stores with real-time analytics and inventory management.",
            tags: ["React", "Chart.js", "TailwindCSS"],
            github: "#",
            demo: "#"
        },
        {
            title: "Task Management App",
            desc: "A collaborative task manager with drag-and-drop functionality and team workspaces.",
            tags: ["React", "Firebase", "DnD Kit"],
            github: "#",
            demo: "#"
        },
        {
            title: "Weather Forecast App",
            desc: "Real-time weather application using OpenWeatherMap API with location detection.",
            tags: ["React", "API Integration", "CSS Modules"],
            github: "#",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-50 dark:bg-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="card-3d bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-gray-800 hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/10 group"
                        >
                            <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative overflow-hidden group-hover:from-slate-200 bg-slate-100/50 dark:group-hover:from-gray-800 dark:group-hover:to-gray-800 transition-colors">
                                <Folder size={48} className="text-slate-400 dark:text-gray-700 group-hover:text-primary transition-colors duration-500" />
                                {/* Placeholder for project image overlay */}
                                <div className="absolute inset-0 bg-white/60 dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                                    <a href={project.github} className="p-2 bg-slate-900/10 dark:bg-white/10 rounded-full hover:bg-slate-900/20 dark:hover:bg-white/20 text-slate-900 dark:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.demo} className="p-2 bg-slate-900/10 dark:bg-white/10 rounded-full hover:bg-slate-900/20 dark:hover:bg-white/20 text-slate-900 dark:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
