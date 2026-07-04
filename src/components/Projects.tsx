"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, ArrowUpRight, ExternalLink, X, Info, Sparkles } from "lucide-react";
import { PROJECTS_DATA } from "../data";
import type { Project } from "../types";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedProject(null);
            }
        };
        if (selectedProject) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selectedProject]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 },
        },
    };

    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Title */}
                <div className="flex flex-col gap-2 mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mx-auto"
                    >
                        <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                            Portfolio Showcase
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
                    >
                        Representative Projects
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-neutral-400 max-w-md mx-auto"
                    >
                        Explore my selected client and open-source systems featuring high-quality codebase setups.
                    </motion.p>
                </div>

                {/* Project Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {PROJECTS_DATA.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{ y: -6, borderColor: "rgba(6, 182, 212, 0.25)" }}
                            className="group rounded-2xl glass overflow-hidden flex flex-col h-full shadow-2xl transition-all duration-300 glass-glow"
                        >
                            {/* Project Image Container */}
                            <div className="h-48 sm:h-52 w-full overflow-hidden relative border-b border-white/5">
                                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/0 transition-all duration-300 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Visual Accent Tags overlay */}
                                <div className="absolute top-4 left-4 flex gap-1.5 z-20">
                                    <span className="px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md border border-white/10 font-mono text-[9px] text-cyan-300 font-semibold uppercase tracking-wider">
                                        {project.techStack[0]}
                                    </span>
                                </div>
                            </div>

                            {/* Project content */}
                            <div className="p-6 flex flex-col grow text-left gap-4">
                                <div className="flex flex-col gap-1.5 grow">
                                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                                        {project.tagline}
                                    </p>
                                </div>

                                {/* Card CTA Footer */}
                                <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/5 mt-auto">
                                    {/* Tech Preview list - clean and compact to prevent layout clutter */}
                                    <div className="flex items-center gap-1.5 overflow-hidden flex-1 min-w-0">
                                        {project.techStack.slice(0, 2).map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="text-[10px] px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-neutral-400 font-mono truncate max-w-20 shrink-0"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 2 && (
                                            <span className="text-[9px] text-neutral-500 font-mono shrink-0 ml-0.5">
                                                +{project.techStack.length - 2}
                                            </span>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="shrink-0 whitespace-nowrap flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-bold uppercase tracking-wider hover:bg-cyan-500 hover:text-neutral-950 transition-all duration-300 cursor-pointer"
                                    >
                                        View Details
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Detailed Project Overlay Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-neutral-950/90 backdrop-blur-md overflow-hidden"
                        >
                            {/* Backdrop Click Closer */}
                            <div
                                className="absolute inset-0 cursor-zoom-out"
                                onClick={() => setSelectedProject(null)}
                            />

                            <motion.div
                                initial={{ scale: 0.95, y: 15 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.95, y: 15 }}
                                onClick={(e) => e.stopPropagation()}
                                transition={{ type: "spring", duration: 0.5 }}
                                className="relative z-10 w-full max-w-3xl max-h-[75vh] bg-neutral-900/95 border-2 border-blue-500/20 rounded-2xl shadow-[0_0_40px_rgba(239,68,68,0.25)] overflow-hidden flex flex-col cursor-default top-5"
                            >
                                {/* Modal Header */}
                                <div className="px-6 py-4 border-b border-red-500/20 flex items-center justify-between bg-neutral-950/60 shrink-0">
                                    <div className="flex items-center gap-2">
                                        <FolderGit2 className="w-4.5 h-4.5 text-blue-400" />
                                        <span className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-wider">
                                            Project Specifications
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:text-white hover:bg-red-500/30 transition-colors cursor-pointer"
                                        aria-label="Close details"
                                    >
                                        <X className="w-4.5 h-4.5" />
                                    </button>
                                </div>

                                {/* Modal Content Scrollable */}
                                <div className="overflow-y-auto grow p-5 sm:p-6 flex flex-col gap-5 text-left">
                                    {/* Hero Banner inside detail - beautifully sized and clear */}
                                    <div className="relative rounded-xl overflow-hidden h-40 sm:h-52 border border-red-500/10 bg-neutral-900/40 shrink-0">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.name}
                                            referrerPolicy="no-referrer"
                                            className="w-full h-full object-cover opacity-60"
                                        />
                                        {/* Balanced legibility gradient protecting text while leaving top of image beautifully bright */}
                                        <div className="absolute inset-0 bg-linear-to-t from-neutral-950/95 via-neutral-950/10 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow">
                                                {selectedProject.name}
                                            </h3>
                                            <p className="text-[11px] sm:text-xs text-neutral-200 mt-0.5 max-w-lg font-medium drop-shadow-sm">
                                                {selectedProject.tagline}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Primary Grid Specifications - optimized col span for the narrower max-w-2xl width */}
                                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                                        {/* Tech & Links Column */}
                                        <div className="sm:col-span-5 flex flex-col gap-4">
                                            {/* Tech stack */}
                                            <div className="flex flex-col gap-1.5">
                                                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-semibold">
                                                    Tech Stack
                                                </span>
                                                <div className="flex flex-wrap gap-1">
                                                    {selectedProject.techStack.map((tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-neutral-300 font-mono"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* External Action Links */}
                                            <div className="flex flex-col gap-1.5 pt-2 border-t border-white/5">
                                                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-semibold">
                                                    Integrations & Repos
                                                </span>
                                                <div className="flex flex-col gap-1.5">
                                                    <a
                                                        href={selectedProject.liveLink}
                                                        target="_blank"
                                                        referrerPolicy="no-referrer"
                                                        className="inline-flex items-center justify-between px-3 py-2 rounded-lg bg-linear-to-r from-blue-500 to-blue-700 text-white text-[11px] font-semibold hover:opacity-90 transition-opacity shadow-md shadow-red-500/10"
                                                    >
                                                        <span className="flex items-center gap-1.5">
                                                            <ExternalLink className="w-3 h-3" />
                                                            Launch Application
                                                        </span>
                                                        <ArrowUpRight className="w-3 h-3" />
                                                    </a>

                                                    <a
                                                        href={selectedProject.githubLink}
                                                        target="_blank"
                                                        referrerPolicy="no-referrer"
                                                        className="inline-flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-[11px] font-semibold hover:bg-white/10 transition-colors"
                                                    >
                                                        <span className="flex items-center gap-1.5">
                                                            <FaGithub className="w-3 h-3" />
                                                            Client Repository
                                                        </span>
                                                        <ArrowUpRight className="w-3 h-3" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description, Challenges & Improvements Column */}
                                        <div className="sm:col-span-7 flex flex-col gap-4">
                                            {/* Detailed description */}
                                            <div className="flex flex-col gap-1">
                                                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-semibold">
                                                    Project Description
                                                </span>
                                                <p className="text-neutral-300 text-xs leading-relaxed">
                                                    {selectedProject.description}
                                                </p>
                                            </div>

                                            {/* Challenges Faced */}
                                            <div className="p-3.5 rounded-xl bg-orange-500/5 border border-orange-500/10 flex flex-col gap-1">
                                                <span className="font-mono text-[9px] text-orange-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                                                    <Info className="w-3 h-3" />
                                                    Challenges Faced
                                                </span>
                                                <p className="text-neutral-300 text-[11px] leading-relaxed">
                                                    {selectedProject.challenges}
                                                </p>
                                            </div>

                                            {/* Future Improvements */}
                                            <div className="p-3.5 rounded-xl bg-red-500/5 border border-red-500/10 flex flex-col gap-1">
                                                <span className="font-mono text-[9px] text-red-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                                                    <Sparkles className="w-3 h-3" />
                                                    Future Plans & Improvements
                                                </span>
                                                <p className="text-neutral-300 text-[11px] leading-relaxed">
                                                    {selectedProject.futurePlans}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
