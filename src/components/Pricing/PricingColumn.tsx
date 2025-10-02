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

    // 001733]via - [#002B5C] to - [#004B94
    const brandBlue = "#002B5C";
    const lightBlue = "#E6F0FF";
    const label = isFree && !isClubs ? "Free Plan" : isPro ? "Pro Plan" : isClubs ? "All-in-One Solution" : "Plan";

    return (
        <div
            className={clsx(
                "w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow relative",
                "border-2 border-blue-200/50 bg-white flex flex-col"
            )}
        >
            {/* Decorative corner accents */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-200/30 to-transparent rounded-bl-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-tr-3xl pointer-events-none" />
            {isPro ? (
                // 🔵 Pro plan: gradient header
                <div className="p-6 text-white bg-gradient-to-br from-[#001733] via-[#002B5C] to-[#004B94]">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-sm opacity-80">{label}</p>
                    {subtitle && <p className="text-sm opacity-90 mt-2">{subtitle}</p>}
                </div>
            ) : isClubs ? (
                // 🟢 Clubs: special styling for combined plan
                <div className="p-6 text-white bg-gradient-to-br from-[#001733] via-[#002B5C] to-[#004B94]">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-sm opacity-80">{label}</p>
                    {subtitle && <p className="text-sm opacity-90 mt-2 italic">{subtitle}</p>}
                </div>
            ) : (
                // 🔹 Free plan: light blue header
                <div className="p-6 relative overflow-hidden" style={{ backgroundColor: lightBlue }}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl" />
                    <h3 className="text-xl font-bold text-[#001733] relative z-10">{title}</h3>
                    <p className="text-sm text-[#001733]/80 relative z-10">{label}</p>
                    {subtitle && <p className="text-sm text-[#001733]/70 mt-2 relative z-10">{subtitle}</p>}
                </div>
            )}

            <div className="p-6 bg-gradient-to-b from-white to-blue-50/10 flex-1 relative">
                <p className="text-xs font-bold text-gray-500 tracking-wide mb-3 uppercase">
                    Included Features
                </p>

                {isPro && (
                    <p className="text-sm text-gray-500 mb-4">
                        Everything in Free, plus:
                    </p>
                )}

                <ul className="space-y-3 text-sm">
                    {features.map((feature, index) => {
                        const isProFeature = feature.includes("(Pro)");
                        const displayFeature = feature.replace(" (Pro)", "");

                        return (
                            <li
                                key={index}
                                className="flex items-start group"
                            >
                                <div className="p-1 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mt-0.5">
                                    <BsFillCheckCircleFill className="h-4 w-4 text-blue-600 shrink-0" />
                                </div>
                                <span className={`text-gray-800 ml-3 ${isProFeature ? 'flex items-center' : ''}`}>
                                    {displayFeature}
                                    {isProFeature && (
                                        <span className="ml-2 px-2 py-1 text-xs bg-gradient-to-r from-[#001733] to-[#002B5C] text-white rounded-full font-medium">
                                            Pro
                                        </span>
                                    )}
                                </span>
                            </li>
                        );
                    })}
                </ul>

                {note && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg border">
                        <p className="text-xs text-gray-600">
                            <span className="font-semibold">Pricing:</span> {note}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PricingColumn;