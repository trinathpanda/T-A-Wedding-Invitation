"use client";

import { useState, useRef, useEffect } from "react";

export default function BackgroundMusic() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const audioRef = useRef(null);

    // Try to autoplay music on first user interaction (browsers block autoplay without interaction)
    useEffect(() => {
        const handleFirstInteraction = () => {
            if (!hasInteracted && audioRef.current) {
                audioRef.current.play()
                    .then(() => {
                        setIsPlaying(true);
                        setHasInteracted(true);
                    })
                    .catch(() => {
                        // Autoplay was prevented
                    });
            }
        };

        // Listen for any user interaction
        document.addEventListener('click', handleFirstInteraction, { once: true });
        document.addEventListener('touchstart', handleFirstInteraction, { once: true });
        document.addEventListener('scroll', handleFirstInteraction, { once: true });

        return () => {
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('touchstart', handleFirstInteraction);
            document.removeEventListener('scroll', handleFirstInteraction);
        };
    }, [hasInteracted]);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(() => {
                    // Autoplay was prevented
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/audio/background-music.mp3"
                loop
                preload="auto"
            />
            <button
                onClick={toggleMusic}
                className="music-toggle"
                aria-label={isPlaying ? "Pause music" : "Play music"}
            >
                {isPlaying ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                )}
            </button>
        </>
    );
}
