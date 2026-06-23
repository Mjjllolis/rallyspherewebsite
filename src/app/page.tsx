import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Features from "@/components/Features/Features";
import CTA from "@/components/CTA";
import GetStartedTab from "@/components/GetStartedTab";
import CommunityGallery from "@/components/CommunityGallery";
import SectionDivider from "@/components/ui/SectionDivider";
import PhotoBackdrop from "@/components/ui/PhotoBackdrop";

const HomePage: React.FC = () => {
  return (
    <>
      <GetStartedTab />
      <Hero />
      <Logos />
      <Features />

      <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden surface-navy text-ink-on-inverse">
        <PhotoBackdrop src="/images/photos/pricing.jpg" overlay={90} position="center" />
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-gradient-animated">Plans &amp; Pricing</h2>
          </div>
          <p className="mb-12 text-center text-ink-on-inverse-muted text-lg">Pick the plan that fits — swap to compare.</p>
          <Pricing />
        </div>
      </section>

      <div className="bg-bg py-12 lg:py-16">
        <SectionDivider />
      </div>

      <FAQ />

      <CommunityGallery />

      <CTA />
    </>
  );
};

export default HomePage;
