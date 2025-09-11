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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
                <PricingColumn key={tier.title} tier={tier} highlight={index === 1} />
            ))}
        </div>
    );
};

export default Pricing;