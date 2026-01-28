"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";

// 🔑 Get your free access key from: https://web3forms.com/
// Replace this with your actual access key
const WEB3FORMS_ACCESS_KEY = "d9133ec1-15c5-47c3-b279-e8946d7b0c1b";

export default function RSVPSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [attending, setAttending] = useState(null);
    const [eventChoice, setEventChoice] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        if (attending === null) {
            alert("Please select if you will attend.");
            return;
        }

        setIsSubmitting(true);

        // Prepare form data for Web3Forms
        const formData = {
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `Wedding RSVP: ${data.fullName}`,
            from_name: "Wedding RSVP Form",
            // Form fields
            "Full Name": data.fullName,
            "Phone Number": data.phoneNumber,
            "Number of Guests": data.guests,
            "Will Attend": attending ? "Yes - Joyfully Accept" : "No - Regretfully Decline",
            "Event Choice": attending ? (eventChoice === "wedding" ? "Wedding Ceremony Only" : eventChoice === "reception" ? "Reception Only" : "Both Events") : "N/A",
            "Message": data.message || "No message",
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
                reset();
                setAttending(null);
                setEventChoice(null);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting RSVP:", error);
            alert("Something went wrong. Please try again.");
        }

        setIsSubmitting(false);
    };

    return (
        <section className="section-padding bg-gradient-to-b from-transparent to-white/30">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <p className="text-gold tracking-[0.3em] text-sm uppercase mb-4">We Hope to See You</p>
                <h2 className="font-display text-royal-blue text-3xl md:text-4xl">RSVP</h2>
                <div className="gold-divider-short" />
                <p className="text-text-muted mt-4 max-w-md mx-auto">
                    Kindly let us know if you will be joining us for our special day
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-xl mx-auto"
            >
                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="card-elegant p-8 md:p-10"
                        >
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-text-dark font-display mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        {...register("fullName", { required: "Full name is required" })}
                                        className="form-input"
                                        placeholder="Enter your full name"
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                                    )}
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="block text-text-dark font-display mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        {...register("phoneNumber", {
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^[+]?[\d\s\-()]{10,}$/,
                                                message: "Please enter a valid phone number"
                                            }
                                        })}
                                        className="form-input"
                                        placeholder="Enter your phone number"
                                    />
                                    {errors.phoneNumber && (
                                        <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
                                    )}
                                </div>

                                {/* Number of Guests */}
                                <div>
                                    <label className="block text-text-dark font-display mb-2">Number of Guests *</label>
                                    <select
                                        {...register("guests", { required: "Please select number of guests" })}
                                        className="form-input"
                                    >
                                        <option value="">Select...</option>
                                        <option value="1">1 Guest</option>
                                        <option value="2">2 Guests</option>
                                        <option value="3">3 Guests</option>
                                        <option value="4">4 Guests</option>
                                        <option value="5+">5+ Guests</option>
                                    </select>
                                    {errors.guests && (
                                        <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
                                    )}
                                </div>

                                {/* Will you attend? */}
                                <div>
                                    <label className="block text-text-dark font-display mb-3">Will you attend? *</label>
                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setAttending(true)}
                                            className={`flex-1 py-3 px-6 rounded-full border-2 transition-all font-display ${attending === true
                                                ? "bg-royal-blue text-white border-royal-blue"
                                                : "bg-transparent text-royal-blue border-gold hover:border-royal-blue"
                                                }`}
                                        >
                                            Joyfully Accept
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setAttending(false)}
                                            className={`flex-1 py-3 px-6 rounded-full border-2 transition-all font-display ${attending === false
                                                ? "bg-text-muted text-white border-text-muted"
                                                : "bg-transparent text-text-muted border-gold hover:border-text-muted"
                                                }`}
                                        >
                                            Regretfully Decline
                                        </button>
                                    </div>
                                </div>

                                {/* Conditional fields when attending */}
                                <AnimatePresence>
                                    {attending === true && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="space-y-6 overflow-hidden"
                                        >
                                            {/* Which event will you attend? */}
                                            <div>
                                                <label className="block text-text-dark font-display mb-3">Which event will you attend? *</label>
                                                <div className="flex flex-col gap-3">
                                                    <button
                                                        type="button"
                                                        onClick={() => setEventChoice("wedding")}
                                                        className={`py-3 px-6 rounded-full border-2 transition-all font-display text-sm ${eventChoice === "wedding"
                                                            ? "bg-royal-blue text-white border-royal-blue"
                                                            : "bg-transparent text-royal-blue border-gold hover:border-royal-blue"
                                                            }`}
                                                    >
                                                        Wedding Ceremony Only
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setEventChoice("reception")}
                                                        className={`py-3 px-6 rounded-full border-2 transition-all font-display text-sm ${eventChoice === "reception"
                                                            ? "bg-royal-blue text-white border-royal-blue"
                                                            : "bg-transparent text-royal-blue border-gold hover:border-royal-blue"
                                                            }`}
                                                    >
                                                        Reception Only
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setEventChoice("both")}
                                                        className={`py-3 px-6 rounded-full border-2 transition-all font-display text-sm ${eventChoice === "both"
                                                            ? "bg-royal-blue text-white border-royal-blue"
                                                            : "bg-transparent text-royal-blue border-gold hover:border-royal-blue"
                                                            }`}
                                                    >
                                                        Both Events
                                                    </button>
                                                </div>
                                            </div>


                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Message */}
                                <div>
                                    <label className="block text-text-dark font-display mb-2">Message (Optional)</label>
                                    <textarea
                                        {...register("message")}
                                        className="form-input min-h-[120px] resize-none"
                                        placeholder="Any special wishes or notes..."
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting || attending === null || (attending && !eventChoice)}
                                    className="btn-elegant w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending..." : "Send RSVP"}
                                </button>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="card-elegant p-12 text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center"
                            >
                                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </motion.div>
                            <h3 className="font-script text-royal-blue text-4xl mb-4">Thank You!</h3>
                            <p className="font-display text-text-muted text-lg">
                                Your response has been recorded.<br />
                                We look forward to celebrating with you!
                            </p>
                            <div className="gold-divider-short mt-6" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
