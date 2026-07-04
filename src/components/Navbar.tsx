"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import { cn } from './../../lib/utils';

interface NavbarProps {
    activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Journey", id: "journey" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // height of navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                isScrolled
                    ? "glass shadow-lg shadow-black/20"
                    : "bg-transparent border-b border-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => scrollToSection("home")}
                    className="flex items-center gap-2 text-white group cursor-pointer"
                >
                    <div className="w-8 h-8 rounded bg-linear-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-bold text-white italic text-sm shadow-md shadow-cyan-500/10">
                        IA
                    </div>
                    <span className="font-bold tracking-tight text-white uppercase text-xs sm:text-sm group-hover:text-cyan-400 transition-colors duration-300">
                        {PERSONAL_INFO.name}
                    </span>
                </button>

                {/* Desktop Nav Items */}
                <nav className="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-neutral-400">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={cn(
                                    "relative py-1 transition-colors duration-300 cursor-pointer text-[10px] tracking-[0.15em]",
                                    isActive ? "text-white border-b border-cyan-500" : "hover:text-white"
                                )}
                            >
                                {item.name}
                            </button>
                        );
                    })}
                </nav>

                {/* Action Button */}
                <div className="hidden md:flex items-center">
                    <a
                        href={PERSONAL_INFO.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-white text-black font-bold text-[10px] uppercase tracking-tighter rounded hover:bg-cyan-500 hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-center"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-20 left-0 w-full md:hidden border-b border-white/10 bg-neutral-950/98 backdrop-blur-xl shadow-2xl z-50"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={cn(
                                        "text-left py-2.5 text-xs font-mono uppercase tracking-widest border-b border-white/5 pb-2.5 transition-colors cursor-pointer",
                                        activeSection === item.id ? "text-cyan-400 font-bold" : "text-neutral-400 hover:text-white"
                                    )}
                                >
                                    {item.name}
                                </button>
                            ))}
                            <a
                                href={PERSONAL_INFO.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest text-center mt-2 hover:bg-cyan-500 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center"
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
