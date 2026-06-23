import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
}

/**
 * Standard section header — eyebrow + title + subtitle on one shared type scale,
 * ending the per-component heading-size drift. Replaces SectionTitle.
 */
const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  inverse = false,
  className,
}) => {
  return (
    <div
      className={clsx(
        align === "center" ? "text-center mx-auto" : "text-left",
        align === "center" && "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gradient inline-block">
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "manrope font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl",
          inverse ? "text-ink-on-inverse" : "text-ink"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-lg leading-relaxed",
            align === "center" && "mx-auto max-w-2xl",
            inverse ? "text-ink-on-inverse-muted" : "text-ink-secondary"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
