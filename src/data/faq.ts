import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `What is ${siteDetails.siteName}?`,
        answer: `${siteDetails.siteName} is an all-in-one platform for sports clubs and players. Discover and join clubs, RSVP to events, manage memberships, sell merch, run payouts, and reward your community — all from your phone or computer.`,
    },
    {
        question: `How much does ${siteDetails.siteName} cost?`,
        answer: 'There are no monthly subscriptions or upfront costs for players or clubs. We charge a small transaction fee per booking or purchase, and clubs can choose to absorb that fee on behalf of their players.',
    },
    {
        question: 'Who is RallySphere for?',
        answer: 'Players looking to discover events and clubs, clubs and facilities that want to run and monetize their community, and sponsors looking to reach engaged local players. There’s a tailored experience for each.',
    },
    {
        question: 'What are Rally Credits?',
        answer: 'Rally Credits are our built-in loyalty system. Players earn credits by attending events and engaging with their clubs, then redeem them for rewards and discounts. Clubs get insight into player engagement along the way.',
    },
    {
        question: 'Can clubs sell merchandise and collect payments?',
        answer: 'Yes. Clubs get a built-in storefront to sell merch, passes, and memberships with Apple Pay and Google Pay at checkout, plus secure direct payouts. Pickup is available now and shipping is coming soon.',
    },
    {
        question: 'When will RallySphere be available?',
        answer: 'RallySphere is launching soon on the App Store and Google Play. Use the form below to join the waitlist and tell us the features you’re most excited about — we’ll keep you posted.',
    },
];
