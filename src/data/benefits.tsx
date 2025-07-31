import { FiBarChart2, FiBriefcase, FiFlag, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

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
      },
      {
        title: "Tournament & League Management",
        description: "Run brackets, track standings, and manage full-season leagues—right from your dashboard.",
        icon: <FiFlag size={26} />
      }
    ],
    imageSrc: "/images/Mockup Images/Club Store.png"
  },
  {
    title: "Gamified Player Experience",
    description: "Engage your players with match tracking, challenges, and unlockable perks that keep them coming back.",
    bullets: [
      {
        title: "RallyChallenges™",
        description: "Complete in-app missions to earn points, badges, and exclusive rewards.",
        icon: <FiTrendingUp size={26} />
      },
      {
        title: "AI Match Feedback",
        description: "Upload match videos and get RallyVision™ stats like consistency graphs and rally lengths.",
        icon: <FiBarChart2 size={26} />
      },
      {
        title: "Social & Skill Growth",
        description: "Find partners, log progress, and level up your game with XP and leaderboards.",
        icon: <FiUser size={26} />
      }
    ],
    imageSrc: "/images/Mockup Images/Gamified.png"
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
  }
]