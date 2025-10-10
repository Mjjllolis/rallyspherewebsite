import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Benefits />

      <Section
        id="pricing"
        title="Plans & Pricing"
        description="Compare features for players and clubs side by side."
      >
        <Pricing
          tiers={[
            {
              title: "Player (Free)",
              price: "$0",
              features: [
                "RSVP to events & join waitlists",
                "Access to RallyStore & digital perks",
                "Track completed goals & challenges",
                "Earn Rally Credits from participation"
              ]
            },
            {
              title: "Clubs & Facilities",
              price: "Small Transaction Fee",
              subtitle: "Whether you're an organizer, group, or a facility, we've got you covered.",
              features: [
                "Host unlimited events & RSVPs",
                "Sell coaching, passes, and merch",
                "Basic dashboards & storefront setup",
                "Announcement board",
                "Gamification with badges/rewards",
                "Push notifications",
                "Lightweight analytics & player logs"
              ],
              note: "No monthly subscriptions or upfront costs— just a small transaction fee per booking or purchase."
            }
          ]}
        />
      </Section>

      {/* <Section
        id="testimonials"
        title="What Our Clients Say"
        description="Hear from those who have rely on us."
      >
        <Testimonials />
      </Section> */}

      {/* <FAQ />
      <Stats />*/}

      <CTA />
    </>
  );
};

export default HomePage;
