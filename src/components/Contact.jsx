import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-gray-900 dark:to-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Let's Take a Coffee With Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Let's Talk</h3>
                        <p className="text-slate-600 dark:text-gray-400 mb-8 text-lg">
                            If you want to know more about me or discuss potential collaborations, feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-600 dark:text-gray-300">
                                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center text-primary shadow-sm dark:shadow-none">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-gray-500">Email</p>
                                    <p className="font-medium">naufalnazhif3@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-slate-600 dark:text-gray-300">
                                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center text-secondary shadow-sm dark:shadow-none">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-gray-500">Location</p>
                                    <p className="font-medium">Palembang, Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/50 dark:bg-gray-800/30 p-8 rounded-2xl border border-slate-200 dark:border-gray-700/50 backdrop-blur-sm shadow-lg dark:shadow-none"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-gray-400 mb-2">Name</label>
                                <input type="text" className="w-full bg-white dark:bg-dark border border-slate-300 dark:border-gray-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-gray-400 mb-2">Email</label>
                                <input type="email" className="w-full bg-white dark:bg-dark border border-slate-300 dark:border-gray-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-gray-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-white dark:bg-dark border border-slate-300 dark:border-gray-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Your message..."></textarea>
                            </div>
                            <button type="button" className="w-full bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-md">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
