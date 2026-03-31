"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser, FiBriefcase,
  FiSearch, FiShoppingCart, FiAward,
  FiCalendar, FiDollarSign, FiUsers, FiBarChart2, FiRepeat,
} from "react-icons/fi";

// ─── Data ────────────────────────────────────────────────────────

interface TierData {
  title: string;
  price: string;
  priceNote: string;
  tagline: string;
  icon: React.ReactNode;
  accent: string;
  accentBg: string;
  features: { icon: React.ReactNode; label: string; detail: string }[];
}

const tiers: TierData[] = [
  {
    title: "Player",
    price: "$0",
    priceNote: "no upfront cost",
    tagline: "Everything you need to discover, join, and earn.",
    icon: <FiUser size={26} />,
    accent: "from-cyan-400 to-cyan-500",
    accentBg: "rgba(34,211,238,0.12)",
    features: [
      { icon: <FiSearch size={22} />, label: "Discover", detail: "Browse clubs, events & personalized feeds" },
      { icon: <FiCalendar size={22} />, label: "RSVP & Waitlists", detail: "Join events instantly with smart capacity tracking" },
      { icon: <FiShoppingCart size={22} />, label: "Shop & Checkout", detail: "RallyStore, cart, Apple Pay & Google Pay. Pickup now — shipping coming soon" },
      { icon: <FiAward size={22} />, label: "Rally Credits", detail: "Earn from events, redeem for rewards & discounts" },
    ],
  },
  {
    title: "Clubs & Facilities",
    price: "$0",
    priceNote: "no upfront cost",
    tagline: "Run, monetize, and grow your community.",
    icon: <FiBriefcase size={26} />,
    accent: "from-blue-400 to-blue-500",
    accentBg: "rgba(96,165,250,0.12)",
    features: [
      { icon: <FiCalendar size={22} />, label: "Events & Ticketing", detail: "Unlimited events with paid tickets & approval flows" },
      { icon: <FiShoppingCart size={22} />, label: "Storefront & Subs", detail: "Sell merch, passes & monthly memberships. Pickup now — shipping coming soon" },
      { icon: <FiDollarSign size={22} />, label: "Direct Payouts", detail: "Secure direct payouts" },
      { icon: <FiUsers size={22} />, label: "Member Management", detail: "Approve, promote & manage your community" },
      { icon: <FiBarChart2 size={22} />, label: "Analytics", detail: "Revenue, attendance, growth & engagement data" },
      { icon: <FiRepeat size={22} />, label: "Credits & Rewards", detail: "Award credits, create redemptions & track usage" },
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────

const Pricing: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tier = tiers[activeIndex];

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      {/* Toggle tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-[#0B1120] rounded-full p-1.5 border border-white/10">
          {tiers.map((t, i) => (
            <button
              key={t.title}
              onClick={() => setActiveIndex(i)}
              className={`relative px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                i === activeIndex
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {i === activeIndex && (
                <motion.div
                  layoutId="pricing-tab"
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${tier.accent} shadow-lg`}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {t.icon}
                {t.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-[#0B1120] rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
        >
          {/* Header */}
          <div className="px-8 pt-10 pb-8 text-center">
            <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.accent} items-center justify-center text-white shadow-lg mb-5`}>
              {tier.icon}
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              {tier.title}
            </h3>
            <p className="text-lg text-gray-400 max-w-md mx-auto mt-3">
              {tier.tagline}
            </p>
          </div>

          {/* Divider */}
          <div className={`h-px mx-8 bg-gradient-to-r from-transparent via-white/15 to-transparent`} />

          {/* Features */}
          <div className="px-8 py-8 space-y-4">
            {tier.features.map((feat, i) => (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="flex items-center gap-4 p-4 rounded-2xl transition-colors hover:bg-white/5"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{ background: tier.accentBg }}
                >
                  {feat.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {feat.label}
                  </h4>
                  <p className="text-base text-gray-400">
                    {feat.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="px-8 pb-10">
            <a
              href="#cta"
              className={`w-full py-4 px-6 rounded-full font-bold text-lg text-white transition-all duration-300 hover:scale-[1.02] shadow-lg flex items-center justify-center bg-gradient-to-r ${tier.accent}`}
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 text-center max-w-2xl mx-auto">
        <p className="text-sm text-gray-400">
          <span className="font-semibold text-white">Pricing:</span> No monthly
          subscriptions or upfront costs — just a small transaction fee per booking
          or purchase. Clubs can choose to absorb fees on behalf of their players.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
