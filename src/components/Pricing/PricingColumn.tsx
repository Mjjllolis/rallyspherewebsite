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
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ rotate: 0.5, scale: 1.02 }}
            className={clsx(
                "w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform",
                "border border-gray-200 bg-white"
            )}
        >
            {isPro ? (
                // 🔵 Pro plan: animated blue gradient header
                <motion.div
                    className="p-6 text-white bg-gradient-to-br from-[#001733] via-[#002B5C] to-[#004B94]"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 200%" }}
                >
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-sm opacity-80">{label}</p>
                    {subtitle && <p className="text-sm opacity-90 mt-2">{subtitle}</p>}
                </motion.div>
            ) : isClubs ? (
                // 🟢 Clubs: special styling for combined plan
                <motion.div
                    className="p-6 text-white bg-gradient-to-br from-[#001733] via-[#002B5C] to-[#004B94]"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 200%" }}
                >
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-sm opacity-80">{label}</p>
                    {subtitle && <p className="text-sm opacity-90 mt-2 italic">{subtitle}</p>}
                </motion.div>
            ) : (
                // 🔹 Free plan: light blue header
                <div className="p-6" style={{ backgroundColor: lightBlue }}>
                    <h3 className="text-xl font-bold text-[#001733]">{title}</h3>
                    <p className="text-sm text-[#001733]/80">{label}</p>
                    {subtitle && <p className="text-sm text-[#001733]/70 mt-2">{subtitle}</p>}
                </div>
            )}

            <div className="p-6 bg-white">
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
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start"
                            >
                                <BsFillCheckCircleFill className="h-5 w-5 text-[#001733] mt-1 mr-2 shrink-0" />
                                <span className={`text-gray-800 ${isProFeature ? 'flex items-center' : ''}`}>
                                    {displayFeature}
                                    {isProFeature && (
                                        <span className="ml-2 px-2 py-1 text-xs bg-[#001733] text-white rounded-full font-medium">
                                            Pro
                                        </span>
                                    )}
                                </span>
                            </motion.li>
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
        </motion.div>
    );
};

export default PricingColumn;