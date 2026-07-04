"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap, Calendar, MapPin, Milestone } from "lucide-react";
import { EDUCATION_DATA, EXPERIENCE_DATA } from "../data";

export default function Experience() {
    return (
        <section id="journey" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Title */}
                <div className="flex flex-col gap-2 mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mx-auto"
                    >
                        <Milestone className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                            Career Timeline
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
                    >
                        Education & Experience
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-neutral-400 max-w-md mx-auto"
                    >
                        My professional career path and educational qualifications detailed chronological order.
                    </motion.p>
                </div>

                {/* Dual Grid timeline */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">

                    {/* Work Experience */}
                    <div className="flex flex-col gap-6 text-left">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">
                                Work Experience
                            </h3>
                        </div>

                        <div className="flex flex-col gap-6 pl-2 border-l border-white/10 ml-6">
                            {EXPERIENCE_DATA.map((exp, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, type: "spring" }}
                                    className="relative pl-6 group"
                                >
                                    {/* Circle indicator */}
                                    <span className="absolute -left-7.75 top-1.5 w-3.5 h-3.5 rounded-full bg-neutral-950 border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors duration-300" />

                                    <div className="p-6 rounded-2xl glass hover:border-cyan-500/30 transition-all duration-300 flex flex-col gap-3 shadow-lg glass-glow">
                                        <div className="flex flex-wrap items-start justify-between gap-2">
                                            <div>
                                                <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                                                    {exp.role}
                                                </h4>
                                                <p className="text-sm text-neutral-300 font-medium">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-neutral-400 text-xs font-mono">
                                                <Calendar className="w-3 h-3 text-cyan-400" />
                                                {exp.duration}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1 text-xs text-neutral-500 font-mono">
                                            <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                                            {exp.location}
                                        </div>

                                        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mt-1 border-t border-white/5 pt-3">
                                            {exp.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education qualifications */}
                    <div className="flex flex-col gap-6 text-left">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                <GraduationCap className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">
                                Education
                            </h3>
                        </div>

                        <div className="flex flex-col gap-6 pl-2 border-l border-white/10 ml-6">
                            {EDUCATION_DATA.map((edu, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, type: "spring" }}
                                    className="relative pl-6 group"
                                >
                                    {/* Circle indicator */}
                                    <span className="absolute -left-7.75 top-1.5 w-3.5 h-3.5 rounded-full bg-neutral-950 border-2 border-indigo-400 group-hover:bg-indigo-400 transition-colors duration-300" />

                                    <div className="p-6 rounded-2xl glass hover:border-indigo-500/30 transition-all duration-300 flex flex-col gap-3 shadow-lg glass-glow">
                                        <div className="flex flex-wrap items-start justify-between gap-2">
                                            <div>
                                                <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                                                    {edu.degree}
                                                </h4>
                                                <p className="text-sm text-neutral-300 font-medium">
                                                    {edu.institution}
                                                </p>
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-neutral-400 text-xs font-mono">
                                                <Calendar className="w-3 h-3 text-indigo-400" />
                                                {edu.duration}
                                            </span>
                                        </div>

                                        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mt-1 border-t border-white/5 pt-3">
                                            {edu.details}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
