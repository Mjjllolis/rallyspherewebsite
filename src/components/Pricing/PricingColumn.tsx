'use client';

import clsx from "clsx";
import { motion } from "framer-motion";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Tier } from "./Pricing";

interface Props {
    tier: Tier;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { title, features, subtitle, note } = tier;

    const isFree = title.toLowerCase().includes("free") || tier.price === "$0" || tier.price.toLowerCase() === "free";
    const isPro = title.toLowerCase().includes("pro");
    const isClubs = title.toLowerCase().includes("clubs");

    const label = isFree && !isClubs ? "FREE" : isPro ? "PRO" : isClubs ? "PREMIUM" : "PLAN";
    const badgeColor = isFree ? "from-cyan-400 to-cyan-500" : isClubs ? "from-blue-400 to-blue-500" : "from-cyan-400 to-cyan-500";

    return (
        <div className="relative w-full h-full flex flex-col items-center pt-20">
            {/* Circular badge at top */}
            <div className={clsx(
                "absolute -top-6 z-20 w-32 h-32 rounded-full bg-gradient-to-br shadow-2xl border-4 border-white",
                badgeColor
            )}>
                {/* Inner circle for depth effect */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-tl from-white/30 to-transparent"></div>
            </div>

            {/* Dark card */}
            <div className="w-full bg-[#001B33] rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full pt-16 pb-8 px-8">
                {/* Title section */}
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                    {subtitle && <p className="text-sm text-gray-400 italic">{subtitle}</p>}
                </div>

                {/* Features list */}
                <ul className="space-y-3 text-sm flex-1">
                    {features.map((feature, index) => {
                        const isProFeature = feature.includes("(Pro)");
                        const displayFeature = feature.replace(" (Pro)", "");

                        return (
                            <li
                                key={index}
                                className="flex items-start group"
                            >
                                <BsFillCheckCircleFill className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                                <span className="text-gray-300 ml-3">
                                    {displayFeature}
                                </span>
                            </li>
                        );
                    })}
                </ul>

                {/* Note section */}
                {note && (
                    <div className="mt-6 p-4 bg-gray-700/50 rounded-xl border border-gray-600">
                        <p className="text-xs text-gray-300">
                            <span className="font-semibold text-white">Pricing:</span> {note}
                        </p>
                    </div>
                )}

                {/* CTA Button */}
                <a
                    href="#cta"
                    className={clsx(
                        "mt-8 w-full py-4 px-6 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center",
                        isFree ? "bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600" :
                        isClubs ? "bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600" :
                        "bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600"
                    )}
                >
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default PricingColumn;