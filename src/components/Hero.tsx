"use client";

import { PERSONAL_INFO } from "../data";
import { FileText } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
    const socialLinks = [
        { icon: <FaGithub className="w-5 h-5" />, href: PERSONAL_INFO.github, label: "GitHub" },
        { icon: <FaLinkedin className="w-5 h-5" />, href: PERSONAL_INFO.linkedin, label: "LinkedIn" },
        { icon: <FaXTwitter className="w-5 h-5" />, href: PERSONAL_INFO.twitter, label: "Twitter" },
        { icon: <FaFacebook className="w-5 h-5" />, href: PERSONAL_INFO.facebook, label: "Facebook" },
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-6"
        >
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch relative z-10">

                {/* Left Side: Profile & Details Card (as seen in Sleek Interface Design) */}
                <div className="md:col-span-4 flex flex-col gap-4">
                    <div className="glass rounded-2xl p-6 flex flex-col items-center text-center justify-center h-full glass-glow">
                        <div className="relative group mb-4">
                            {/* Pulsing neon back glow */}
                            <div className="absolute -inset-1 bg-linear-to-tr from-cyan-500 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                            <img
                                src={PERSONAL_INFO.avatar}
                                alt={PERSONAL_INFO.name}
                                referrerPolicy="no-referrer"
                                className="relative w-32 h-32 rounded-2xl object-cover ring-2 ring-cyan-500/20 grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <h2 className="text-xl font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h2>
                        <p className="text-cyan-400 text-xs font-mono mt-1 mb-4 uppercase tracking-widest">{PERSONAL_INFO.title}</p>
                        <p className="text-xs text-neutral-400 leading-relaxed max-w-60">
                            Crafting pixel-perfect full-stack systems and high-converting storefronts at the intersection of design and code.
                        </p>
                    </div>
                </div>

                {/* Right Side: Introduction, Bio, & Action Links */}
                <div className="md:col-span-8 flex flex-col gap-4">
                    <div className="glass rounded-2xl p-8 flex flex-col justify-between h-full text-left gap-6 glass-glow">
                        <div className="flex flex-col gap-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 w-fit">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-300 font-semibold">
                                    Available for work
                                </span>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold">Introduction</span>
                                <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                                    Solving complex logic with <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400">intuitive design</span>
                                </h1>
                            </div>

                            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                                Hello! I am a full-stack web developer and specialized Shopify storefront builder. I bridge high-fidelity graphics with absolute functional speed. By replacing heavy legacy templates with modern ecosystems built with React, Next.js, and TypeScript, I deliver extreme user satisfaction.
                            </p>
                        </div>

                        {/* CTAs and Connect Socials */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/5 mt-auto">
                            <div className="flex flex-wrap items-center gap-3">
                                <button
                                    onClick={() => {
                                        const contactSec = document.getElementById("contact");
                                        if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-[10px] uppercase tracking-widest rounded-xl hover:bg-cyan-500 hover:text-white transition-all cursor-pointer"
                                >
                                    Contact Me
                                </button>

                                <a
                                    href={PERSONAL_INFO.resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-black font-bold text-[10px] uppercase tracking-widest rounded-xl hover:bg-cyan-500 hover:text-white transition-all cursor-pointer"
                                >
                                    <FileText className="w-3.5 h-3.5" />
                                    View Resume
                                </a>
                            </div>

                            {/* Connect Social Links */}
                            <div className="flex items-center gap-2">
                                {socialLinks.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.href}
                                        target="_blank"
                                        referrerPolicy="no-referrer"
                                        className="p-2 rounded-xl bg-white/5 border border-white/5 text-neutral-400 hover:text-cyan-400 hover:bg-white/10 hover:border-cyan-500/20 transition-all duration-300"
                                        aria-label={link.label}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
