"use client";

import { motion } from "framer-motion";

const events = [
    {
        id: 1,
        title: "Wedding Ceremony",
        date: "March 5, 2026",
        time: "12:00 PM",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Reception",
        date: "March 6, 2026",
        time: "7:00 PM",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 01-1.5.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
            </svg>
        ),
    },
];

export default function TimelineSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="section-padding bg-gradient-to-b from-white/30 to-transparent">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <p className="text-gold tracking-[0.3em] text-sm uppercase mb-4">The Celebration</p>
                <h2 className="font-display text-royal-blue text-3xl md:text-4xl">Wedding Timeline</h2>
                <div className="gold-divider-short" />
            </motion.div>

            {/* Desktop Horizontal Timeline */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="hidden md:flex justify-center items-start gap-4 max-w-5xl mx-auto relative"
            >
                {/* Timeline line */}
                <div className="absolute top-10 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />

                {events.map((event) => (
                    <motion.div
                        key={event.id}
                        variants={itemVariants}
                        className="flex flex-col items-center text-center flex-1 relative"
                    >
                        {/* Icon circle */}
                        <div className="w-20 h-20 rounded-full bg-white border-2 border-gold flex items-center justify-center text-gold mb-4 shadow-lg relative z-10">
                            {event.icon}
                        </div>

                        {/* Event details */}
                        <h3 className="font-display text-royal-blue text-lg mb-1">{event.title}</h3>
                        <p className="text-text-muted text-sm">{event.date}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Mobile Vertical Timeline */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="md:hidden max-w-sm mx-auto"
            >
                {events.map((event) => (
                    <motion.div
                        key={event.id}
                        variants={itemVariants}
                        className="timeline-item mb-8"
                    >
                        <div className="timeline-dot" />
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white border-2 border-gold flex items-center justify-center text-gold flex-shrink-0">
                                {event.icon}
                            </div>
                            <div>
                                <h3 className="font-display text-royal-blue text-lg">{event.title}</h3>
                                <p className="text-text-muted text-sm">{event.date}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
