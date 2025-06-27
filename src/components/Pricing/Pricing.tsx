// components/Pricing/Pricing.tsx

import React from "react";
import PricingColumn from "./PricingColumn";

export interface Tier {
    title: string;
    price: string;
    features: string[];
    note?: string;
}

interface PricingProps {
    tiers: Tier[];
}

const Pricing: React.FC<PricingProps> = ({ tiers }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {tiers.map((tier, index) => (
                <PricingColumn key={tier.title} tier={tier} highlight={index === 1} />
            ))}
        </div>
    );
};

export default Pricing;