"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MessageSquare, Send, CheckCircle, Smartphone } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setIsSubmitting(true);

        // Simulate API request
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            setFormData({ name: "", email: "", message: "" });

            // Hide success message after 4 seconds
            setTimeout(() => setShowSuccess(false), 4000);
        }, 1500);
    };

    const contactCards = [
        {
            icon: <Mail className="w-5 h-5 text-cyan-400" />,
            label: "Email Me",
            value: PERSONAL_INFO.email,
            href: `mailto:${PERSONAL_INFO.email}`,
        },
        {
            icon: <Phone className="w-5 h-5 text-indigo-400" />,
            label: "Phone / Call",
            value: PERSONAL_INFO.phone,
            href: `tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`,
        },
        {
            icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
            label: "WhatsApp Chat",
            value: "Direct Link",
            href: PERSONAL_INFO.whatsapp,
        },
    ];

    return (
        <section id="contact" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto relative -z-10">

                {/* Section Title */}
                <div className="flex flex-col gap-2 mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mx-auto"
                    >
                        <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                            Get In Touch
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
                    >
                        Let's Initiate a Dialogue
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-neutral-400 max-w-md mx-auto"
                    >
                        Have a project concept, custom Shopify setup requirement, or standard query? Reach out directly.
                    </motion.p>
                </div>

                {/* Contact Split layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">

                    {/* Quick contact channels */}
                    <div className="lg:col-span-5 flex flex-col gap-5 text-left">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                            Contact Channels
                        </h3>

                        {contactCards.map((card, idx) => (
                            <motion.a
                                key={idx}
                                href={card.href}
                                target="_blank"
                                referrerPolicy="no-referrer"
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-5 rounded-2xl glass hover:border-cyan-500/30 flex items-center gap-4 transition-all duration-300 shadow-md group cursor-pointer glass-glow"
                            >
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                    {card.icon}
                                </div>
                                <div className="grow min-w-0">
                                    <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
                                        {card.label}
                                    </p>
                                    <p className="text-sm sm:text-base font-semibold text-neutral-200 mt-0.5 truncate group-hover:text-cyan-400 transition-colors">
                                        {card.value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Contact message Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 sm:p-8 rounded-2xl glass shadow-xl flex flex-col text-left glass-glow"
                        >
                            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-6">
                                Send Direct Message
                            </h3>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                {/* Name */}
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="name" className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Imran Ali"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/20 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-xs sm:text-sm font-medium outline-none transition-all"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="email" className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="imran@example.com"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/20 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-xs sm:text-sm font-medium outline-none transition-all"
                                    />
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="message" className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">
                                        Message Body
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Describe your project expectations..."
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/20 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white text-xs sm:text-sm font-medium outline-none resize-none transition-all"
                                    />
                                </div>

                                {/* Submit button with loading state */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3.5 px-6 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest disabled:opacity-50 flex items-center justify-center gap-2 hover:bg-cyan-500 hover:text-white transition-all duration-300 cursor-pointer"
                                >
                                    {isSubmitting ? (
                                        <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <Send className="w-3.5 h-3.5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Success Notification pop-in */}
                            <AnimatePresence>
                                {showSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-2.5 text-xs sm:text-sm"
                                    >
                                        <CheckCircle className="w-5 h-5 shrink-0" />
                                        <span>
                                            Thank you! Your message has been sent successfully. I'll get back to you shortly.
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
}
