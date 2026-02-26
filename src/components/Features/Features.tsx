import Section1Discover from "./Section1Discover";
import Section2Carousel from "./Section2Carousel";
import Section3Commerce from "./Section3Commerce";
import Section4Credits from "./Section4Credits";
import Section5Admin from "./Section5Admin";
import Section6Grid from "./Section6Grid";
import Section7Creator from "./Section7Creator";

const Features: React.FC = () => {
  return (
    <div id="features">
      <h2 className="sr-only">Features</h2>
      <Section1Discover />
      <Section2Carousel />
      <Section3Commerce />

      {/* Separator between Commerce and Credits */}
      <div className="relative hero-gradient">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-cyan-400/40" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-50" />
            <div className="w-2 h-2 rounded-full bg-blue-400/40" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
          </div>
        </div>
      </div>

      <Section4Credits />
      <Section5Admin />
      <Section7Creator />
      <Section6Grid />
    </div>
  );
};

export default Features;
