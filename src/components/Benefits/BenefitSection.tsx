"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import GradientSection from "../GradientSection";
import { IBenefit } from "@/types";

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.15,
            duration: 1.2,
            delayChildren: 0.3,
            staggerChildren: 0.15,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.15,
            duration: 1.2,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, description, imageSrc, bullets } = benefit;

    // Check if this is Rally Credits section (no image)
    const isRallyCredits = !imageSrc;

    return (
        <section className={`relative py-16 lg:py-24 overflow-hidden w-full ${isRallyCredits ? 'hero-gradient' : ''}`}>
            {/* Animated gradient background */}
            {!isRallyCredits && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 -z-10" />
            )}

            {/* Grid texture for Rally Credits */}
            {isRallyCredits && (
                <div className="absolute inset-0 z-0 w-full h-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]" />
            )}

            {/* Animated grid pattern */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff08_1px,transparent_1px),linear-gradient(to_bottom,#0066ff08_1px,transparent_1px)] bg-[size:60px_60px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff06_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff06_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>

            {/* Geometric accent lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-20">
                <svg className="absolute top-10 left-10 w-64 h-64 text-blue-500" viewBox="0 0 100 100">
                    <path d="M 10,10 L 90,10 L 50,90 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
                <svg className="absolute bottom-20 right-20 w-48 h-48 text-cyan-500" viewBox="0 0 100 100">
                    <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
                    <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="90" y1="10" x2="10" y2="90" stroke="currentColor" strokeWidth="0.5" />
                </svg>
            </div>

            {/* Animated gradient beams */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <div className={clsx("absolute h-px w-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent", {
                    "top-1/4 animate-pulse": !imageAtRight,
                    "top-3/4 animate-pulse": imageAtRight
                })} style={{ animationDuration: '4s' }} />
                <div className={clsx("absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent", {
                    "left-1/4 animate-pulse": imageAtRight,
                    "right-1/4 animate-pulse": !imageAtRight
                })} style={{ animationDuration: '5s', animationDelay: '1s' }} />
            </div>

            <div className="w-full px-6 lg:px-12 xl:px-20">
                <div className={clsx("grid gap-8 lg:gap-12 xl:gap-16 items-center max-w-[1600px] mx-auto", {
                    "lg:grid-cols-[1fr_minmax(0,400px)]": !imageAtRight && imageSrc,
                    "lg:grid-cols-[minmax(0,400px)_1fr]": imageAtRight && imageSrc,
                    "lg:grid-cols-1": !imageSrc
                })}>
                    {/* Content Side */}
                    <motion.div
                        className={clsx("space-y-8", {
                            "lg:col-start-2": imageAtRight && imageSrc,
                            "max-w-5xl mx-auto": !imageSrc
                        })}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        {!imageSrc ? (
                            // Special box layout for sections without mockup (Rally Credits)
                            <div className="p-8 lg:p-12 rounded-3xl bg-white/10 backdrop-blur-sm shadow-2xl border-2 border-white/20">
                                <div className="space-y-6">
                                    <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center">
                                        {title}
                                    </h3>
                                    <p className="text-lg lg:text-xl text-white/90 leading-relaxed text-center">
                                        {description}
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6 mt-10">
                                    {bullets.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors group border border-white/20"
                                        >
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-lg mb-4">
                                                {item.icon}
                                            </div>
                                            <h4 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-white/80 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            // Original layout for sections with mockup
                            <>
                                <div className="space-y-4">
                                    <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                        {title}
                                    </h3>
                                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                                        {description}
                                    </p>
                                </div>

                                <div className="space-y-5">
                                    {bullets.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-4 group p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-colors shadow-sm hover:shadow-md"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                                                {item.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-blue-600 transition-colors">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </motion.div>

                    {/* Phone Mockup Side */}
                    {imageSrc && (
                        <div className={clsx("relative w-full max-w-[300px] mx-auto lg:max-w-none lg:mx-0", { "lg:col-start-1 lg:row-start-1": imageAtRight })}
                            style={{ perspective: '2000px' }}
                        >
                            <div
                                className="relative w-full h-full"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transform: `rotateY(${imageAtRight ? -15 : 15}deg)`
                                }}
                            >
                                {/* Glow behind phone */}
                                <div className={clsx("absolute inset-0 blur-3xl opacity-30 rounded-3xl pointer-events-none", {
                                    "bg-gradient-to-br from-blue-400 to-cyan-400 -rotate-6": !imageAtRight,
                                    "bg-gradient-to-bl from-cyan-400 to-purple-400 rotate-6": imageAtRight
                                })} style={{ transform: 'translateZ(-50px)' }} />

                                <Image
                                    src={imageSrc}
                                    alt={title}
                                    width="400"
                                    height="800"
                                    quality={100}
                                    className="relative z-10 w-full h-auto drop-shadow-2xl select-none"
                                    draggable={false}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default BenefitSection