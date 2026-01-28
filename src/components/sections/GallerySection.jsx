"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Gallery images - Trinath & Archana's pre-wedding photos
const galleryImages = [
    { id: 1, src: "/images/gallery/photo5.jpg", alt: "Palace walkway candid" },
    { id: 2, src: "/images/gallery/photo4.jpg", alt: "Pool reflection shot" },
    { id: 3, src: "/images/gallery/photo2.jpg", alt: "Gazebo pose with flowing gown" },
    { id: 4, src: "/images/gallery/photo7.jpg", alt: "Steps candid with colored lights" },
    { id: 5, src: "/images/gallery/photo1.jpg", alt: "Red arches night portrait" },
    { id: 6, src: "/images/gallery/photo3.jpg", alt: "Garden portrait in black saree" },
    { id: 7, src: "/images/gallery/photo6.jpg", alt: "Palace backdrop couple shot" },
];

export default function GallerySection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [direction, setDirection] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlaying || selectedImage) return;

        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, selectedImage]);

    const goToNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, []);

    const goToPrevious = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }, []);

    const goToSlide = useCallback((index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    }, [currentIndex]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") goToPrevious();
            if (e.key === "ArrowRight") goToNext();
            if (e.key === "Escape" && selectedImage) setSelectedImage(null);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [goToNext, goToPrevious, selectedImage]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <section className="section-padding">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <p className="text-gold tracking-[0.3em] text-sm uppercase mb-4">Memories</p>
                <h2 className="font-display text-royal-blue text-3xl md:text-4xl">Our Gallery</h2>
                <div className="gold-divider-short" />
            </motion.div>

            {/* Carousel Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="carousel-container max-w-4xl mx-auto"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                {/* Main Carousel */}
                <div className="carousel-wrapper">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.3 },
                                scale: { duration: 0.3 },
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    goToNext();
                                } else if (swipe > swipeConfidenceThreshold) {
                                    goToPrevious();
                                }
                            }}
                            className="carousel-slide"
                            onClick={() => setSelectedImage(galleryImages[currentIndex])}
                        >
                            {/* Gallery image */}
                            <Image
                                src={galleryImages[currentIndex].src}
                                alt={galleryImages[currentIndex].alt}
                                fill
                                className="object-cover rounded-lg"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        className="carousel-nav carousel-nav-prev"
                        onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                        aria-label="Previous slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        className="carousel-nav carousel-nav-next"
                        onClick={(e) => { e.stopPropagation(); goToNext(); }}
                        aria-label="Next slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Slide Counter */}
                    <div className="carousel-counter">
                        {currentIndex + 1} / {galleryImages.length}
                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="carousel-indicators">
                    {galleryImages.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Thumbnails */}
                <div className="carousel-thumbnails">
                    {galleryImages.map((image, index) => (
                        <motion.button
                            key={image.id}
                            className={`carousel-thumbnail ${index === currentIndex ? "carousel-thumbnail-active" : ""}`}
                            onClick={() => goToSlide(index)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover rounded"
                            />
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lightbox"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative bg-white p-4 rounded-lg max-w-4xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-[80vw] max-w-2xl aspect-[4/3] relative rounded overflow-hidden">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Lightbox Navigation */}
                            <button
                                onClick={(e) => { e.stopPropagation(); goToPrevious(); setSelectedImage(galleryImages[(currentIndex - 1 + galleryImages.length) % galleryImages.length]); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-royal-blue/80 text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); goToNext(); setSelectedImage(galleryImages[(currentIndex + 1) % galleryImages.length]); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-royal-blue/80 text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-3 -right-3 w-10 h-10 bg-royal-blue text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
