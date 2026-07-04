"use client";

import { ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-white/5 bg-neutral-950/80 backdrop-blur-sm px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Branding */}
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-linear-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-bold text-white italic text-[10px] shadow-md shadow-cyan-500/10">
                        IA
                    </div>
                    <span className="font-mono text-xs text-neutral-400 tracking-tight">
                        © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
                    </span>
                </div>

                {/* Quick Links */}
                <div className="flex items-center gap-6">
                    <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest hidden sm:inline">
                        Design & Build by Imran
                    </span>

                    <button
                        onClick={scrollToTop}
                        className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1 text-xs font-semibold cursor-pointer"
                        aria-label="Scroll to top"
                    >
                        <span>Back to top</span>
                        <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                </div>

            </div>
        </footer>
    );
}
