import clsx from "clsx";

type Padding = "none" | "compact" | "default" | "hero";
type Width = "wide" | "text" | "narrow" | "full";

const paddingMap: Record<Padding, string> = {
  none: "",
  compact: "py-12 sm:py-16",
  default: "py-16 sm:py-24",
  hero: "py-24 sm:py-32",
};

const widthMap: Record<Width, string> = {
  wide: "max-w-[1600px]",
  text: "max-w-7xl",
  narrow: "max-w-3xl",
  full: "max-w-none",
};

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Vertical rhythm preset. */
  padding?: Padding;
  /** Inner container max width. */
  width?: Width;
  /** Render on the navy "inverse" panel with light text. */
  inverse?: boolean;
  /** Decorative layer (orbs, grid overlay) rendered behind the content. */
  decor?: React.ReactNode;
}

/**
 * Standard section wrapper: consistent vertical rhythm, container width, and an
 * optional navy "inverse" surface. Replaces the old Section/GradientSection.
 */
const Section: React.FC<SectionProps> = ({
  children,
  id,
  className,
  containerClassName,
  padding = "default",
  width = "wide",
  inverse = false,
  decor,
}) => {
  return (
    <section
      id={id}
      className={clsx(
        "relative overflow-hidden",
        paddingMap[padding],
        inverse ? "surface-navy text-ink-on-inverse" : "bg-bg text-ink",
        className
      )}
    >
      {decor}
      <div
        className={clsx(
          "relative z-10 mx-auto px-6 lg:px-12",
          widthMap[width],
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
