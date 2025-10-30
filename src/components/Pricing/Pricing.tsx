// components/Pricing/Pricing.tsx

import React from "react";
import PricingColumn from "./PricingColumn";

export interface Tier {
    title: string;
    price: string;
    features: string[];
    note?: string;
    subtitle?: string;
}

interface PricingProps {
    tiers: Tier[];
}

const Pricing: React.FC<PricingProps> = ({ tiers }) => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-16 lg:gap-12 w-full max-w-6xl mx-auto py-8">
            {tiers.map((tier, index) => (
                <div
                    key={tier.title}
                    className="w-full lg:w-[550px] transform transition-all duration-300 hover:scale-105"
                >
                    <PricingColumn tier={tier} highlight={index === 1} />
                </div>
            ))}
        </div>
    );
};

export default Pricing;