"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="section-padding text-center bg-gradient-to-b from-white/30 to-cream">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p className="font-script text-gold text-4xl md:text-5xl mb-4">
                    Trinath & Archana
                </p>
                <p className="text-text-muted tracking-widest text-sm uppercase mb-8">
                    5 March 2026 • Odisha, India
                </p>

                <div className="gold-divider" />

                <p className="text-text-muted text-sm mt-8">
                    Made with ♥ for our special day
                </p>

                {/* Wedding Logo */}
                <div className="mt-8">
                    <Image
                        src="/wedding-logo.png"
                        alt="T & A"
                        width={64}
                        height={64}
                        className="mx-auto rounded-full border-2 border-gold/30"
                    />
                </div>
            </motion.div>
        </footer>
    );
}
