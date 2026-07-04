"use client";

import { motion, type Variants } from "motion/react";
import {
    Cpu,
    Layout,
    Server,
    Sliders,
    Code2,
    Droplet,
    GitBranch,
} from "lucide-react";
import { SKILL_CATEGORIES } from "../data";
import { FaNodeJs, FaReact, FaShopify } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BsJavascript, BsTypescript } from "react-icons/bs";
import { SiJsonwebtokens, SiPrisma, SiTailwindcss } from "react-icons/si";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { CgVercel } from "react-icons/cg";

export default function Skills() {
    const getCategoryIcon = (title: string) => {
        if (title.toLowerCase().includes("frontend")) {
            return <Layout className="w-5 h-5 text-cyan-400" />;
        }
        if (title.toLowerCase().includes("backend") || title.toLowerCase().includes("database")) {
            return <Server className="w-5 h-5 text-indigo-400" />;
        }
        return <Sliders className="w-5 h-5 text-amber-400" />;
    };

    const getSkillIconDetails = (iconName: string, skillName: string) => {
        switch (iconName) {
            case "React":
                return {
                    icon: <FaReact className="w-4.5 h-4.5" />,
                    colorClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 group-hover/skill:bg-cyan-500/20 group-hover/skill:border-cyan-500/40 group-hover/skill:text-cyan-300"
                };
            case "Next":
                return {
                    icon: <RiNextjsFill className="w-4.5 h-4.5" />,
                    colorClass: "text-neutral-300 bg-white/5 border-white/10 group-hover/skill:bg-white/10 group-hover/skill:border-white/20 group-hover/skill:text-white"
                };
            case "TypeScript":
                return {
                    icon: <BsTypescript className="w-4.5 h-4.5" />,
                    colorClass: "text-blue-400 bg-blue-500/10 border-blue-500/20 group-hover/skill:bg-blue-500/20 group-hover/skill:border-blue-500/40 group-hover/skill:text-blue-300"
                };
            case "JavaScript":
                return {
                    icon: <BsJavascript className="w-4.5 h-4.5" />,
                    colorClass: "text-green-400 bg-blue-500/10 border-blue-500/20 group-hover/skill:bg-blue-500/20 group-hover/skill:border-blue-500/40 group-hover/skill:text-blue-300"
                };
            case "Tailwind":
                return {
                    icon: <SiTailwindcss className="w-4.5 h-4.5" />,
                    colorClass: "text-sky-400 bg-sky-500/10 border-sky-500/20 group-hover/skill:bg-sky-500/20 group-hover/skill:border-sky-500/40 group-hover/skill:text-sky-300"
                };
            case "HTML":
                return {
                    icon: <Code2 className="w-4.5 h-4.5" />,
                    colorClass: "text-orange-400 bg-orange-500/10 border-orange-500/20 group-hover/skill:bg-orange-500/20 group-hover/skill:border-orange-500/40 group-hover/skill:text-orange-300"
                };
            case "Node":
                return {
                    icon: <FaNodeJs className="w-4.5 h-4.5" />,
                    colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 group-hover/skill:bg-emerald-500/20 group-hover/skill:border-emerald-500/40 group-hover/skill:text-emerald-300"
                };
            case "Database":
                if (skillName.toLowerCase().includes("mongo")) {
                    return {
                        icon: <DiMongodb className="w-4.5 h-4.5" />,
                        colorClass: "text-green-400 bg-green-500/10 border-green-500/20 group-hover/skill:bg-green-500/20 group-hover/skill:border-green-500/40 group-hover/skill:text-green-300"
                    };
                }
                return {
                    icon: <DiPostgresql className="w-4.5 h-4.5" />,
                    colorClass: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 group-hover/skill:bg-indigo-500/20 group-hover/skill:border-indigo-500/40 group-hover/skill:text-indigo-300"
                };
            case "Code":
                if (skillName.toLowerCase().includes("liquid")) {
                    return {
                        icon: <Droplet className="w-4.5 h-4.5" />,
                        colorClass: "text-teal-400 bg-teal-500/10 border-teal-500/20 group-hover/skill:bg-teal-500/20 group-hover/skill:border-teal-500/40 group-hover/skill:text-teal-300"
                    };
                }
                return {
                    icon: <SiPrisma className="w-4.5 h-4.5" />,
                    colorClass: "text-pink-400 bg-pink-500/10 border-pink-500/20 group-hover/skill:bg-pink-500/20 group-hover/skill:border-pink-500/40 group-hover/skill:text-pink-300"
                };
            case "Shield":
                return {
                    icon: <SiJsonwebtokens className="w-4.5 h-4.5" />,
                    colorClass: "text-amber-400 bg-amber-500/10 border-amber-500/20 group-hover/skill:bg-amber-500/20 group-hover/skill:border-amber-500/40 group-hover/skill:text-amber-300"
                };
            case "ShoppingBag":
                return {
                    icon: <FaShopify className="w-4.5 h-4.5" />,
                    colorClass: "text-lime-400 bg-lime-500/10 border-lime-500/20 group-hover/skill:bg-lime-500/20 group-hover/skill:border-lime-500/40 group-hover/skill:text-lime-300"
                };
            case "Git":
                return {
                    icon: <GitBranch className="w-4.5 h-4.5" />,
                    colorClass: "text-rose-400 bg-rose-500/10 border-rose-500/20 group-hover/skill:bg-rose-500/20 group-hover/skill:border-rose-500/40 group-hover/skill:text-rose-300"
                };
            case "Figma":
                return {
                    icon: <FiFigma className="w-4.5 h-4.5" />,
                    colorClass: "text-purple-400 bg-purple-500/10 border-purple-500/20 group-hover/skill:bg-purple-500/20 group-hover/skill:border-purple-500/40 group-hover/skill:text-purple-300"
                };
            case "Vercel":
                return {
                    icon: <CgVercel className="w-4.5 h-4.5" />,
                    colorClass: "text-blue-400 bg-purple-500/10 border-purple-500/20 group-hover/skill:bg-purple-500/20 group-hover/skill:border-purple-500/40 group-hover/skill:text-purple-300"
                };
            default:
                return {
                    icon: <Cpu className="w-4.5 h-4.5" />,
                    colorClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 group-hover/skill:bg-cyan-500/20 group-hover/skill:border-cyan-500/40 group-hover/skill:text-cyan-300"
                };
        }
    };

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 },
        },
    };

    return (
        <section id="skills" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Title */}
                <div className="flex flex-col gap-2 mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mx-auto"
                    >
                        <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                            Capabilities
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
                    >
                        Technical Expertise
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-neutral-400 max-w-md mx-auto"
                    >
                        A breakdown of my engineering core, programming competencies, and tools stack.
                    </motion.p>
                </div>

                {/* Skills Categories Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                    {SKILL_CATEGORIES.map((category, catIdx) => (
                        <motion.div
                            key={catIdx}
                            variants={cardVariants}
                            className="p-6 sm:p-8 rounded-2xl glass shadow-xl flex flex-col gap-6 text-left glass-glow"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                                    {getCategoryIcon(category.title)}
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills Interactive List */}
                            <div className="flex flex-col gap-3">
                                {category.skills.map((skill, skillIdx) => {
                                    const details = getSkillIconDetails(skill.iconName, skill.name);
                                    return (
                                        <div
                                            key={skillIdx}
                                            className="flex items-center gap-3.5 p-3 rounded-xl bg-neutral-950/45 border border-white/5 hover:border-cyan-500/20 hover:bg-cyan-500/2 transition-all duration-300 group/skill cursor-default"
                                        >
                                            <div className={`p-2.5 rounded-xl border transition-all duration-300 ${details.colorClass}`}>
                                                {details.icon}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-neutral-200 tracking-wide font-mono text-xs sm:text-sm group-hover/skill:text-white transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Highlight/Callout Section */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-12 flex flex-wrap justify-center gap-3"
                >
                    {["HTML5", "CSS3", "Tailwind CSS", "React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "JWT", "Shopify", "Liquid", "Git"].map((tag, idx) => (
                        <span
                            key={idx}
                            className="pill hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-cyan-950/20 transition-all duration-300 cursor-default"
                        >
                            #{tag}
                        </span>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
