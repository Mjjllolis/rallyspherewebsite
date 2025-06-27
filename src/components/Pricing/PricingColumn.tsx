import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IPricing } from "@/types";

import { Tier } from "./Pricing"; // or from "@/components/Pricing/Pricing"

interface Props {
    tier: Tier;
    highlight?: boolean;
}
const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { title, price, features } = tier;

    const isNumericPrice = typeof price === 'number';
    return (
        <div
            className={clsx(
                "w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 shadow-sm transition-all lg:max-w-full",
                { "shadow-xl ring-2 ring-secondary": highlight }
            )}
        >
            <div className="p-6 border-b border-gray-200 rounded-t-xl">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                <p className="text-4xl font-bold mb-4 text-secondary">
                    {isNumericPrice ? `$${price}` : price}
                    {isNumericPrice && (
                        <span className="text-base font-normal text-gray-600">/mo</span>
                    )}
                </p>
                <button
                    className={clsx(
                        "w-full py-3 px-4 rounded-full font-medium transition",
                        {
                            "bg-yellow-400 text-black hover:bg-yellow-300": highlight,
                            "bg-gray-100 hover:bg-gray-200": !highlight,
                        }
                    )}
                >
                    Get Started
                </button>
            </div>
            <div className="p-6">
                <p className="text-xs font-semibold text-gray-500 tracking-wide mb-3">
                    FEATURES
                </p>
                {title !== "Player Free" && title !== "Club Free" && (
                    <p className="text-sm text-gray-500 mb-4">
                        Everything in basic, plus...
                    </p>
                )}
                <ul className="space-y-3 text-sm">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <BsFillCheckCircleFill className="h-5 w-5 text-blue-600 mt-1 mr-2" />
                            <span className="text-gray-700">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingColumn