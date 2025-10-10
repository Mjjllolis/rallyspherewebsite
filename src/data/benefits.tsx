import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
  {

    title: "All-in-One Club Management",
    description: "Simplify everything from RSVPs to payments in one modern app designed for social sports clubs.",
    bullets: [
      {
        title: "Smart RSVPs & Waitlists",
        description: "Easily manage events with automated confirmations, waitlists, and capacity tracking.",
        icon: <FiTarget size={26} />
      },
      {
        title: "Club Payments Made Easy",
        description: "Collect fees or donations directly in-app with secure transactions.",
        icon: <FiDollarSign size={26} />
      },
      {
        title: "Membership & Coaching Tools",
        description: "Enable optional club memberships, coaching features, and branded perks.",
        icon: <FiBriefcase size={26} />
      }
    ],
    imageSrc: "/images/Mockup Images/Club Store.png"
  },
  {
    title: "Built-In Monetization",
    description: "Grow your club without the overhead. RallySphere provides tools to drive revenue while simplifying admin.",
    bullets: [
      {
        title: "Branded Merch Storefronts",
        description: "Offer custom gear and generate revenue with zero upfront cost.",
        icon: <FiShield size={26} />
      },
      {
        title: "Analytics & Insights",
        description: "Track engagement, player stats, and growth trends via your club dashboard.",
        icon: <FiPieChart size={26} />
      },
      {
        title: "Launch Support",
        description: "Get help onboarding, promoting your club, and driving player signups from day one.",
        icon: <FiLock size={26} />
      }
    ],
    imageSrc: "/images/Mockup Images/RSVP.png"
  },
  {
    title: "Rally Credits",
    description: "Earn credits from events, redeem them for merch or discounts, and give clubs powerful insights into player engagement.",
    bullets: [
      {
        title: "Earn Credits from Events",
        description: "Players gain Rally Credits by joining and participating in club events.",
        icon: <FiTrendingUp size={26} />
      },
      {
        title: "Redeem for Merch & Discounts",
        description: "Use credits to unlock exclusive merchandise, event discounts, and special perks.",
        icon: <FiDollarSign size={26} />
      },
      {
        title: "Gamified Club Analytics",
        description: "Clubs can see who joins, how often players participate, and other engagement statistics.",
        icon: <FiBarChart2 size={26} />
      }
    ]
  }
]