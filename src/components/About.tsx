"use client";

import { motion, type Variants } from "motion/react";
import { BookOpen, Coffee, Heart, User, Zap } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function About() {
    const cards = [
        {
            icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
            title: "My Coding Journey",
            content: PERSONAL_INFO.about.journey,
        },
        {
            icon: <Zap className="w-5 h-5 text-amber-400" />,
            title: "What I Excel At",
            content: PERSONAL_INFO.about.enjoyment,
        },
        {
            icon: <Heart className="w-5 h-5 text-rose-400" />,
            title: "Interests & Personality",
            content: PERSONAL_INFO.about.hobbies,
        },
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 },
        },
    };

    return (
        <section id="about" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Title */}
                <div className="flex flex-col gap-2 mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mx-auto"
                    >
                        <User className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                            About Me
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
                    >
                        A Glimpse Into My World
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-neutral-400 max-w-md mx-auto"
                    >
                        Who I am, what drives me, and how I maintain creative energy outside the editor.
                    </motion.p>
                </div>

                {/* Bento Grid layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
                >
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -4, borderColor: "rgba(6, 182, 212, 0.25)" }}
                            className="p-6 sm:p-8 rounded-2xl glass shadow-xl flex flex-col gap-4 text-left transition-all duration-300 glass-glow"
                        >
                            <div className="p-3 rounded-xl bg-white/5 w-fit border border-white/10">
                                {card.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white tracking-tight mt-1">
                                {card.title}
                            </h3>
                            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                                {card.content}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Personality Accent Bar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 p-6 rounded-2xl glass flex flex-col sm:flex-row items-center justify-between gap-6 glass-glow"
                >
                    <div className="flex items-center gap-4 text-left">
                        <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hidden sm:block">
                            <Coffee className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                                Core Philosophy
                            </p>
                            <p className="text-sm font-medium text-white tracking-tight mt-0.5">
                                "Simple is better than complex. Complex is better than complicated."
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="pill">
                            ⚡ Lifelong Learner
                        </span>
                        <span className="pill">
                            ⚽ Football Enthusiast
                        </span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
