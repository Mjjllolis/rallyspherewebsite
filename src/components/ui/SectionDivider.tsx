import clsx from "clsx";

interface SectionDividerProps {
  /** Use on navy/inverse surfaces (brighter line) vs. light surfaces. */
  inverse?: boolean;
  className?: string;
}

/**
 * A thin glowing accent line with center brand dots. Used to separate and
 * "breathe" between content blocks. Sits on its parent's background.
 */
const SectionDivider: React.FC<SectionDividerProps> = ({ inverse = false, className }) => {
  const lineColor = inverse ? "via-white/25" : "via-line-strong";
  return (
    <div className={clsx("w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20", className)}>
      <div className="flex items-center gap-4" aria-hidden="true">
        <div className={clsx("flex-1 h-px bg-gradient-to-r from-transparent to-transparent", lineColor)} />
        <span className="h-1.5 w-1.5 rounded-full bg-accent-from/60" />
        <span className="h-2.5 w-2.5 rounded-full brand-gradient opacity-70" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent-to/60" />
        <div className={clsx("flex-1 h-px bg-gradient-to-r from-transparent to-transparent", lineColor)} />
      </div>
    </div>
  );
};

export default SectionDivider;
