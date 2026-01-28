"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center section-padding relative">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
                    <path d="M50 0 C60 30, 90 40, 100 50 C90 60, 60 70, 50 100 C40 70, 10 60, 0 50 C10 40, 40 30, 50 0" fill="currentColor" />
                </svg>
            </div>
            <div className="absolute bottom-20 right-10 w-24 h-24 opacity-10 rotate-45">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
                    <path d="M50 0 C60 30, 90 40, 100 50 C90 60, 60 70, 50 100 C40 70, 10 60, 0 50 C10 40, 40 30, 50 0" fill="currentColor" />
                </svg>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center relative z-10"
            >
                {/* Small decorative text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-gold tracking-[0.4em] text-sm uppercase mb-6"
                >
                    Together with their families
                </motion.p>

                {/* Names */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="font-script text-royal-blue text-6xl md:text-8xl lg:text-9xl mb-4"
                >
                    Trinath
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="font-display text-text-muted text-xl md:text-2xl italic mb-4"
                >
                    &
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 1 }}
                    className="font-script text-royal-blue text-6xl md:text-8xl lg:text-9xl mb-8"
                >
                    Archana
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="font-display text-text-dark text-xl md:text-2xl tracking-wide mb-8"
                >
                    Are Getting Married
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.3, duration: 0.8 }}
                >
                    <div className="gold-divider" />
                </motion.div>

                {/* Date */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="font-display text-gold text-2xl md:text-3xl tracking-[0.2em] mt-8"
                >
                    5 • March • 2026
                </motion.p>

                {/* Location hint */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.7, duration: 0.8 }}
                    className="text-text-muted text-lg mt-4"
                >
                    Odisha, India
                </motion.p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="flex flex-col items-center text-gold/60"
                >
                    <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
