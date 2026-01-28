"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Wedding date: March 5, 2026
        const weddingDate = new Date("2026-03-05T10:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = weddingDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const countdownItems = [
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Minutes" },
        { value: timeLeft.seconds, label: "Seconds" },
    ];

    return (
        <section className="section-padding bg-gradient-to-b from-transparent to-white/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <p className="text-gold tracking-[0.3em] text-sm uppercase mb-4">Save the Date</p>
                <h2 className="font-display text-royal-blue text-3xl md:text-4xl">Counting Down to Forever</h2>
                <div className="gold-divider-short" />
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-3xl mx-auto"
            >
                {countdownItems.map((item) => (
                    <motion.div
                        key={item.label}
                        variants={itemVariants}
                        className="countdown-box"
                    >
                        <span className="font-display text-royal-blue text-4xl md:text-5xl font-semibold block">
                            {String(item.value).padStart(2, "0")}
                        </span>
                        <span className="text-text-muted text-sm tracking-widest uppercase mt-2 block">
                            {item.label}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
