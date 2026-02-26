import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Features from "@/components/Features/Features";
import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Features />

      <section id="pricing" className="relative py-16 lg:py-24 overflow-hidden hero-gradient">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-4">
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Plans & Pricing</h2>
          </div>
          <p className="mb-12 text-center text-white/70 text-lg">Pick the plan that fits — swap to compare.</p>
          <Pricing />
        </div>
      </section>

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
