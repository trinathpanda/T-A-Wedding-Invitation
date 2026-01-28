"use client";

import { motion } from "framer-motion";

export default function FloatingElements() {
    // Create multiple floating decorative elements
    const elements = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: Math.random() * 20 + 10,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15,
    }));

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className="absolute text-gold/10"
                    style={{
                        left: `${el.left}%`,
                        width: el.size,
                        height: el.size,
                    }}
                    initial={{ y: "100vh", opacity: 0 }}
                    animate={{
                        y: "-10vh",
                        opacity: [0, 0.5, 0.5, 0],
                    }}
                    transition={{
                        duration: el.duration,
                        delay: el.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* Small decorative shape */}
                    <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 0 C12 6, 18 8, 20 10 C18 12, 12 14, 10 20 C8 14, 2 12, 0 10 C2 8, 8 6, 10 0" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}
