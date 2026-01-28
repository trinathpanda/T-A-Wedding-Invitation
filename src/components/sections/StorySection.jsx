"use client";

import { motion } from "framer-motion";

export default function StorySection() {
    return (
        <section className="section-padding">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-gold tracking-[0.3em] text-sm uppercase mb-4">Our Invitation</p>
                    <h2 className="font-display text-royal-blue text-3xl md:text-4xl mb-6">With Joy in Our Hearts</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="gold-divider" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-8"
                >
                    <p className="font-body text-text-dark text-lg md:text-xl leading-relaxed mb-6">
                        With the blessings of elders and the love of our families,
                        <br />we invite you to join us as we celebrate our marriage
                        <br />and the union of two families.
                    </p>

                    <p className="font-body text-text-muted text-lg md:text-xl leading-relaxed italic">
                        Your presence and good wishes
                        <br />will make this occasion truly special.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8"
                >
                    <div className="gold-divider" />
                </motion.div>

                {/* Decorative quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-10"
                >
                    <p className="font-script text-gold text-2xl md:text-3xl">
                        "And so the adventure begins..."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
