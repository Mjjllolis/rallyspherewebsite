import {
  FiHome, FiSearch, FiHeart, FiBookmark, FiStar,
  FiUsers, FiFilter, FiCheckCircle, FiSettings,
  FiCalendar, FiClock, FiMapPin, FiTag, FiDollarSign,
  FiShoppingCart, FiPackage, FiGrid, FiImage,
  FiCreditCard, FiSmartphone, FiTruck, FiBox,
  FiAward, FiTrendingUp, FiGift, FiBarChart2,
  FiRepeat, FiUserCheck, FiActivity,
  FiPieChart, FiDatabase, FiLayers,
  FiShield, FiLock, FiBell, FiVideo,
  FiZap, FiTarget, FiMessageCircle, FiGlobe
} from "react-icons/fi";

import type {
  IFeatureBullet,
  IAccordionItem,
  IFeatureCard,
  ICarouselSlide,
  ICreatorHighlight,
} from "@/types";

// ─── Section 1: Discover Your Community ─────────────────────────
export const section1Bullets: IFeatureBullet[] = [
  {
    title: "Swipeable Event Cards",
    description: "Browse events with multiple feeds — Editors' Pick, For You, Following, and Saved.",
    icon: <FiHome size={22} />,
  },
  {
    title: "Personalized Discovery",
    description: "Get event recommendations tailored to your interests and past activity.",
    icon: <FiSearch size={22} />,
  },
  {
    title: "Like, Save & Follow",
    description: "Bookmark events, follow clubs, and build your personalized feed.",
    icon: <FiHeart size={22} />,
  },
  {
    title: "Rich User Profiles",
    description: "Customize with photos, bio, emoji, background image, social links, and more.",
    icon: <FiStar size={22} />,
  },
];

// ─── Section 2: Everything Your Community Needs (Carousel) ──────
export const section2Slides: ICarouselSlide[] = [
  {
    label: "Clubs",
    imageSrc: "/images/Mockup Images/Clubs.png",
    bullets: [
      {
        title: "Browse & Filter Clubs",
        description: "Search by 10+ categories — Academic, Sports, Arts, Tech, Business, and more.",
        icon: <FiFilter size={20} />,
      },
      {
        title: "Instant or Approval Join",
        description: "Join clubs instantly or request admin approval for private communities.",
        icon: <FiCheckCircle size={20} />,
      },
      {
        title: "Rich Club Profiles",
        description: "Cover image, logo, member list, events, store, and social links.",
        icon: <FiUsers size={20} />,
      },
    ],
  },
  {
    label: "Events",
    imageSrc: "/images/Mockup Images/Events.png",
    bullets: [
      {
        title: "Browse & RSVP",
        description: "Search and filter upcoming events. Join, leave, or get waitlisted.",
        icon: <FiCalendar size={20} />,
      },
      {
        title: "Full Event Details",
        description: "Date/time, location, virtual links, attendee list, and tags.",
        icon: <FiMapPin size={20} />,
      },
      {
        title: "Paid Ticketing",
        description: "Itemized pricing, max attendees, public/private toggle, and approval flow.",
        icon: <FiTag size={20} />,
      },
    ],
  },
  {
    label: "Club Profile",
    imageSrc: "/images/Mockup Images/RallyClub.png",
    bullets: [
      {
        title: "Club Admin Tools",
        description: "Approve, reject, remove, and promote members with full control.",
        icon: <FiSettings size={20} />,
      },
      {
        title: "Analytics Dashboard",
        description: "Track members, events, revenue, and attendance in real time.",
        icon: <FiBarChart2 size={20} />,
      },
      {
        title: "Event Creation",
        description: "Set capacity, pricing, Rally Credits rewards, and privacy controls.",
        icon: <FiCalendar size={20} />,
      },
    ],
  },
];

// ─── Section 3: Built-In Commerce (Accordion) ──────────────────
export const section3Accordion: IAccordionItem[] = [
  {
    title: "Store & E-Commerce",
    bullets: [
      {
        title: "Browse & Shop",
        description: "Search, filter, and sort items by featured, price, or newest.",
        icon: <FiShoppingCart size={20} />,
      },
      {
        title: "Product Pages",
        description: "Multiple images, size/color variants, and real-time inventory status.",
        icon: <FiImage size={20} />,
      },
      {
        title: "Store Management",
        description: "Create items, set pricing and tax, manage inventory, and configure variants. Shipping coming soon.",
        icon: <FiGrid size={20} />,
      },
    ],
  },
  {
    title: "Checkout & Payments",
    bullets: [
      {
        title: "Direct & Secure Payments",
        description: "Apple Pay, Google Pay, and card payments with full PCI compliance.",
        icon: <FiCreditCard size={20} />,
      },
      {
        title: "Pickup & Delivery",
        description: "Pickup available now — shipping coming soon.",
        icon: <FiTruck size={20} />,
      },
      {
        title: "Order Tracking",
        description: "Pending, Processing, Picked Up, Delivered — with full history. Shipping tracking coming soon.",
        icon: <FiPackage size={20} />,
      },
    ],
  },
  {
    title: "Subscriptions — Coming Soon",
    bullets: [
      {
        title: "Monthly Memberships",
        description: "Configurable pricing with recurring billing. Coming soon.",
        icon: <FiRepeat size={20} />,
      },
      {
        title: "Subscriber Management",
        description: "Track status, manage tiers, and offer pro subscriptions for clubs and users. Coming soon.",
        icon: <FiUserCheck size={20} />,
      },
    ],
  },
];

// ─── Section 4: Rally Credits ───────────────────────────────────
export const section4Cards: IFeatureCard[] = [
  {
    title: "Earn from Events",
    description: "Players gain Rally Credits by attending and participating in club events. Pending credits confirm after check-in.",
    icon: <FiTrendingUp size={24} />,
  },
  {
    title: "Redeem Rewards",
    description: "Use credits for store discounts, event discounts, free items, free admission, and custom club rewards.",
    icon: <FiGift size={24} />,
  },
  {
    title: "Club Admin Controls",
    description: "Award, remove, or set credits. Create redemption options and view full transaction history and analytics.",
    icon: <FiBarChart2 size={24} />,
  },
];

// ─── Section 5: Powerful Admin Tools (Accordion) ────────────────
export const section5Accordion: IAccordionItem[] = [
  {
    title: "Club Management",
    bullets: [
      {
        title: "Member Management",
        description: "Approve, reject, remove, and promote members with role-based access.",
        icon: <FiUsers size={20} />,
      },
      {
        title: "Edit Club Details",
        description: "Update branding, social links, categories, and privacy settings on the fly.",
        icon: <FiSettings size={20} />,
      },
      {
        title: "Push Notifications — Coming Soon",
        description: "Send targeted announcements with deep links to events, items, and profiles. Coming soon.",
        icon: <FiBell size={20} />,
      },
    ],
  },
  {
    title: "Payouts & Revenue",
    bullets: [
      {
        title: "Secure Payouts",
        description: "Secure direct payouts — onboard in minutes.",
        icon: <FiDollarSign size={20} />,
      },
      {
        title: "Revenue Tracking",
        description: "Monitor sales, subscriptions, and ticket revenue with payout history.",
        icon: <FiPieChart size={20} />,
      },
      {
        title: "Analytics Dashboard",
        description: "Member stats, event metrics, attendance trends, and redemption data.",
        icon: <FiActivity size={20} />,
      },
    ],
  },
];

// ─── Section 6: And So Much More (Grid) ─────────────────────────
export const section6Cards: IFeatureCard[] = [
  {
    title: "Push Notifications — Coming Soon",
    description: "Real-time alerts with deep link support for events, items, and profiles. Coming soon.",
    icon: <FiBell size={22} />,
  },
  {
    title: "Light & Dark Mode",
    description: "Light, dark, or auto theme with persistent preference and glass-morphism effects.",
    icon: <FiZap size={22} />,
  },
  {
    title: "Media Support — Coming Soon",
    description: "Camera/gallery uploads, multi-image galleries, and video player for virtual events. Coming soon.",
    icon: <FiVideo size={22} />,
  },
  {
    title: "Security & Privacy",
    description: "Encrypted storage, Firebase security rules, and comprehensive privacy policies.",
    icon: <FiShield size={22} />,
  },
  {
    title: "Shopping Cart",
    description: "Quantity adjustments, tax, and total calculations with wishlists. Shipping coming soon.",
    icon: <FiShoppingCart size={22} />,
  },
  {
    title: "Saved Addresses",
    description: "Manage pickup locations now. Shipping addresses coming soon.",
    icon: <FiMapPin size={22} />,
  },
  {
    title: "Per-Club Credit Tracking",
    description: "Track pending vs. confirmed balances with full per-club credit history.",
    icon: <FiDatabase size={22} />,
  },
  {
    title: "Waitlists & Approval",
    description: "Automated waitlists, capacity tracking, and approval-required events.",
    icon: <FiClock size={22} />,
  },
];

// ─── Section 7: Creator Economy ─────────────────────────────────
export const section7Highlights: ICreatorHighlight[] = [
  {
    title: "Ticket Sales",
    description: "Sell paid event tickets with itemized pricing, capacity limits, and instant payouts.",
    icon: <FiTag size={24} />,
  },
  {
    title: "Merchandise",
    description: "Built-in storefront per club — sell gear, passes, and digital perks with zero upfront cost.",
    icon: <FiShoppingCart size={24} />,
  },
  {
    title: "Subscriptions — Coming Soon",
    description: "Monthly club memberships with recurring billing and tier management. Coming soon.",
    icon: <FiRepeat size={24} />,
  },
  {
    title: "Direct Payouts",
    description: "Secure direct payouts — clubs get paid directly with full revenue tracking.",
    icon: <FiDollarSign size={24} />,
  },
];
