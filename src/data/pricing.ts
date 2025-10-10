import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Club Starter',
        price: 29,
        features: [
            'Smart RSVPs & Waitlists',
            'Club Payments',
            'Up to 50 members',
            'Basic analytics',
            'Email support',
            'Announcement board',
        ],
    },
    {
        name: 'Club Pro',
        price: 99,
        features: [
            'Everything in Club Starter',
            'Up to 200 members',
            'Branded Merch Storefronts',
            'Membership & Coaching Tools',
            'Advanced analytics & insights',
            'Announcement board',
            'Gamification with badges/rewards',
            'Push notifications',
            'Priority email & phone support',
        ],
    },
    {
        name: 'Club Enterprise',
        price: 'Custom',
        features: [
            'Everything in Club Pro',
            'Unlimited members',
            'Custom branding',
            'Announcement board',
            'Gamification with badges/rewards',
            'Push notifications',
            '24/7 dedicated support',
            'Custom integrations',
            'On-site training',
        ],
    },
]