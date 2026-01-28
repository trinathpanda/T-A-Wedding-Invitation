"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function LandingAnimation({ onComplete }) {
    const [isAnimating, setIsAnimating] = useState(true);
    const wrapperRef = useRef(null);
    const envelopeRef = useRef(null);
    const flapRef = useRef(null);
    const sealRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setIsAnimating(false);
                if (onComplete) onComplete();
            },
        });

        // Initial state - extreme close-up on wax seal
        gsap.set(flapRef.current, { rotateX: 0 });
        gsap.set(envelopeRef.current, { scale: 2.5 });

        // Animation sequence - cinematic close-up reveal
        tl
            // Brief pause on the close-up
            .to({}, { duration: 0.5 })

            // Zoom out while flap opens - simultaneous
            .to(envelopeRef.current, {
                scale: 1,
                duration: 2.2,
                ease: "power2.inOut",
            })
            .to(flapRef.current, {
                rotateX: 180,
                duration: 2.0,
                ease: "power2.inOut",
            }, "<0.3") // Start flap opening slightly after zoom begins

            // Quick fade out to reveal main site
            .to(wrapperRef.current, {
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
            });

    }, [onComplete]);

    if (!isAnimating) return null;

    return (
        <div ref={wrapperRef} className="envelope-wrapper">
            <div
                ref={envelopeRef}
                className="envelope"
            >
                {/* Envelope body - main rectangular part */}
                <div className="envelope-body" />

                {/* Bottom flap (decorative V shape) */}
                <div className="envelope-bottom-flap" />

                {/* Left side flap */}
                <div className="envelope-left-flap" />

                {/* Right side flap */}
                <div className="envelope-right-flap" />

                {/* Inner shadow/depth */}
                <div className="envelope-inner" />

                {/* Top flap that opens - triangular */}
                <div
                    ref={flapRef}
                    className="envelope-top-flap"
                >
                    <div className="envelope-flap-front" />
                    <div className="envelope-flap-back" />

                    {/* Wax seal attached to top flap - rotates with it */}
                    <div ref={sealRef} className="wax-seal">
                        <div className="seal-logo">
                            <Image
                                src="/wedding-logo.png"
                                alt="T & A"
                                width={50}
                                height={50}
                                className="seal-logo-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
