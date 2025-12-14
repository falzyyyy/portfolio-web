import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Briefcase, Award, Trophy, Star } from 'lucide-react';

const Organization = () => {
    const experiences = [
        {
            role: "Public Relation Member",
            org: "GDGoC Chapter Sriwijaya University",
            period: "Jan 2025 - Present",
            type: "organization",
            desc: "Managed external communications and promoted events like the Google APAC Solution Challenge. Served as Vice Project Officer for the 'InspireHER' initiative.",
            color: "from-red-500 to-orange-500"
        },
        {
            role: "Vice Chairman",
            org: "ILKOM SPORT UNSRI",
            period: "Jan 2025 - Present",
            type: "organization",
            desc: "Leading sports-related programs, supervising internal/external events, and fostering strategic collaborations for the Informatics community.",
            color: "from-emerald-500 to-teal-500"
        },
        {
            role: "Inspectorate General",
            org: "BEM KM FASILKOM UNSRI",
            period: "Jan 2025 - Present",
            type: "organization",
            desc: "Conducting internal audits, ensuring transparency, and evaluating organizational performance to drive operational excellence.",
            color: "from-purple-600 to-pink-600"
        },
        {
            role: "Cloud Computing Cohort",
            org: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
            period: "September 2024 – January 2025",
            type: "internship",
            desc: "Specialized in cloud infrastructure and deployment pipelines. Gained hands-on experience with Google Cloud technologies and contributed to a capstone project solving real-world problems.",
            color: "from-red-600 to-red-500"
        },
        {
            role: "Deputy of Sports & Talent Dev",
            org: "HIMPUNAN MAHASISWA INFORMATIKA (HMIF)",
            period: "Feb 2024 – Dec 2024",
            type: "organization",
            desc: "Led talent development initiatives and served as PIC for Exhibition Srifoton 2024, showcasing student innovations.",
            color: "from-cyan-500 to-blue-500"
        },
        {
            role: "Fullstack Web Developer Intern",
            org: "Rumah Sakit Dr. Mohammad Hoesin (RSMH)",
            period: "July 2024 – August 2024",
            type: "internship",
            desc: "Developed an online attendance web application using Laravel (PHP/MySQL) with a user-friendly frontend interface.",
            color: "from-blue-600 to-indigo-600"
        },
        {
            role: "Staff of Sport Division",
            org: "BEM KM FASILKOM UNSRI",
            period: "Mar 2023 – Dec 2023",
            type: "organization",
            desc: "Coordinated sports events. Served as Chief Committee for FASILKOM E-Sport Competition (FEC) 2023 and Head of Event for Fasilkom Games 2023.",
            color: "from-violet-500 to-purple-500"
        }
    ];

    const achievements = [
        {
            title: "Chief Committee",
            event: "FASILKOM E-Sport Competition 2023",
            desc: "Led a team of 15 to organize a university-level e-sports competition with 100+ participants.",
            icon: <Trophy className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />,
            color: "border-yellow-500/50 hover:shadow-yellow-500/20"
        },
        {
            title: "PIC Exhibition",
            event: "Srifoton 2024",
            desc: "Oversaw the planning and execution of a major student innovation exhibition.",
            icon: <Star className="w-8 h-8 text-purple-500 dark:text-purple-400" />,
            color: "border-purple-500/50 hover:shadow-purple-500/20"
        },
        {
            title: "Vice Project Officer",
            event: "InspireHER Initiative",
            desc: "Supported planning and execution of women-empowerment activities led by GDGoC.",
            icon: <Award className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />,
            color: "border-emerald-500/50 hover:shadow-emerald-500/20"
        }
    ];

    return (
        <section id="organization" className="py-20 bg-slate-50 dark:bg-dark relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Experience Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Organization & Experience</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative mb-32">
                    <div className="absolute left-0 md:left-1/2 h-full w-1 bg-slate-200 dark:bg-gray-800 -translate-x-1/2 hidden md:block"></div>
                    <div className="space-y-12">
                        {experiences.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1 w-full">
                                    <div className="card-3d bg-white dark:bg-gray-900 p-8 rounded-3xl border border-slate-200 dark:border-gray-800 relative group overflow-hidden">
                                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 dark:opacity-10 blur-3xl rounded-full -mr-10 -mt-10 transition-opacity group-hover:opacity-10 dark:group-hover:opacity-20`}></div>

                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} bg-opacity-10`}>
                                                {item.type === 'internship' ? (
                                                    <Briefcase className="text-indigo-600 dark:text-white w-6 h-6" />
                                                ) : (
                                                    <Users className="text-indigo-600 dark:text-white w-6 h-6" />
                                                )}
                                            </div>
                                            <span className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400 font-medium bg-slate-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                                                <Calendar size={14} />
                                                {item.period}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{item.role}</h3>
                                        <div className="text-primary font-medium mb-4">{item.org}</div>
                                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 dark:bg-dark border-4 border-slate-200 dark:border-gray-800 z-10 relative">
                                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}></div>
                                </div>

                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Key Achievements/Roles Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Key Roles & Achievements</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: index * 0.1 }}
                            className={`card-3d bg-white dark:bg-gray-900 p-8 rounded-3xl border ${item.color} border-opacity-30 relative group overflow-hidden`}
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-current opacity-5 blur-2xl rounded-full -mr-10 -mt-10"></div>
                            <div className="mb-6 inline-flex p-4 rounded-2xl bg-slate-100 dark:bg-gray-800 text-slate-900 dark:text-white shadow-sm dark:shadow-lg">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                            <div className="text-sm font-medium text-slate-500 dark:text-gray-400 mb-4">{item.event}</div>
                            <p className="text-slate-600 dark:text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Organization;
