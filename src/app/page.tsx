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
      <Container>
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
                  "Basic partner matching (RallyMatch)",
                  "Track completed goals & challenges"
                ]
              },
              {
                title: "Player Pro",
                price: "$4.99–$7.99/mo",
                features: [
                  "Advanced RallyMatch partner intelligence",
                  "Performance tracking & RallyRecaps",
                  "Priority access to events & features",
                  "Gamified achievements & rewards"
                ]
              },
              {
                title: "Club (Free)",
                price: "$0",
                features: [
                  "Host unlimited events & RSVPs",
                  "Sell coaching, passes, and merch",
                  "Basic dashboards & storefront setup",
                  "Lightweight analytics & player logs",
                  "Tournament & League Management"
                ],
                note: "3–15% transaction fee on all sales"
              },
              {
                title: "Club Pro",
                price: "$19–$39/mo",
                features: [
                  "Detailed analytics & engagement reports",
                  "Custom QR storefront & branding",
                  "Multi-admin + coaching tools",
                  "Access to beta features like RallyVision™",
                  "Tournament & League Management"
                ]
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
      </Container>
    </>
  );
};

export default HomePage;
