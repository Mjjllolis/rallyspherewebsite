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
        <div className="flex flex-col md:flex-row md:flex-wrap lg:grid lg:grid-cols-3 gap-8 w-full">
            {tiers.map((tier, index) => (
                <PricingColumn key={tier.title} tier={tier} highlight={index === 1} />
            ))}
        </div>
    );
};

export default Pricing;