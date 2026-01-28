"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Static imports for critical components
import HeroSection from "@/components/sections/HeroSection";
import CountdownSection from "@/components/sections/CountdownSection";
import StorySection from "@/components/sections/StorySection";
import VenueSection from "@/components/sections/VenueSection";
import TimelineSection from "@/components/sections/TimelineSection";
import GallerySection from "@/components/sections/GallerySection";
import RSVPSection from "@/components/sections/RSVPSection";
import Footer from "@/components/Footer";

// Dynamic imports for non-critical components
const LandingAnimation = dynamic(() => import("@/components/LandingAnimation"), {
  ssr: false,
});
const BackgroundMusic = dynamic(() => import("@/components/ui/BackgroundMusic"), {
  ssr: false,
});
const FloatingElements = dynamic(() => import("@/components/ui/FloatingElements"), {
  ssr: false,
});

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
    // Small delay before showing content for smoother transition
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <main className="relative">
      {/* Landing Animation */}
      {!animationComplete && (
        <LandingAnimation onComplete={handleAnimationComplete} />
      )}

      {/* Main Content */}
      <div
        className={`transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"
          }`}
      >
        {/* Floating decorative elements */}
        <FloatingElements />

        {/* All Sections */}
        <HeroSection />
        <CountdownSection />
        <StorySection />
        <VenueSection />
        <TimelineSection />
        <GallerySection />
        <RSVPSection />
        <Footer />

        {/* Background Music Toggle */}
        <BackgroundMusic />
      </div>
    </main>
  );
}
