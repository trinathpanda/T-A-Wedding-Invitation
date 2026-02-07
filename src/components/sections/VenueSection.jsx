"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VenueSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    // Event data
    const events = [
        {
            title: "Wedding Ceremony",
            date: "5th March 2026",
            time: "12:00 PM",
            venue: "Sri Jatadhareswara Kalyana Mandap",
            address: "Berhampur, Odisha, India",
            mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60359.29396756778!2d84.7247!3d19.3150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d4e0a0c9c0c0f%3A0x4a5cfd9c75ec8d0!2sBerhampur%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
            directionsUrl: "https://maps.google.com/?q=Sri+Jatadhareswara+Kalyana+Mandap+Berhampur+Odisha+India",
        },
        {
            title: "Reception",
            date: "6th March 2026",
            time: "7:00 PM",
            venue: "Panda Building",
            address: "Panda building, Main road, Beside Canara Bank, Digapahandi, Ganjam, Odisha",
            mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15207.8!2d84.5682!3d19.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d59d1d9d9d9d9%3A0x3a3d59d1d9d9d9d9!2sDigapahandi%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
            directionsUrl: "https://maps.app.goo.gl/vZs4ZhxKRCNPiHWq9",
        },
    ];

    return (
        <section ref={sectionRef} className="relative overflow-hidden min-h-screen">
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 -top-20"
            >
                <div
                    className="w-full h-[120%] bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(248, 243, 234, 0.85), rgba(248, 243, 234, 0.95)), url('/images/venue.jpg')`,
                        backgroundColor: '#f8f3ea',
                    }}
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 section-padding py-20">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-gold tracking-[0.3em] text-sm uppercase mb-4">Join Us At</p>
                    <h2 className="font-display text-royal-blue text-3xl md:text-5xl mb-4">Our Celebration</h2>
                    <p className="font-script text-gold text-2xl">Two Days of Joy</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center mb-16"
                >
                    <div className="gold-divider" />
                </motion.div>

                {/* Two Column Event Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                            className="venue-card"
                        >
                            {/* Event Header */}
                            <div className="text-center mb-6">
                                <p className="text-gold tracking-[0.2em] text-xs uppercase mb-2">{event.date}</p>
                                <h3 className="font-display text-royal-blue text-2xl md:text-3xl mb-2">{event.title}</h3>
                                <p className="font-display text-gold text-xl">{event.time}</p>
                            </div>

                            {/* Venue Info */}
                            <div className="text-center mb-6">
                                <p className="font-body text-text-dark text-lg font-semibold mb-1">
                                    {event.venue}
                                </p>
                                <p className="font-body text-text-muted">
                                    {event.address}
                                </p>
                            </div>

                            {/* Google Map Embed */}
                            <div className="map-container mb-6">
                                <iframe
                                    src={event.mapEmbedUrl}
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: '12px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Map to ${event.venue}`}
                                />
                            </div>

                            {/* Get Directions Button */}
                            <div className="text-center">
                                <a
                                    href={event.directionsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-directions"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    Get Directions
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
