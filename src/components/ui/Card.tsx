import clsx from "clsx";

type Surface = "1" | "2" | "glass";

const surfaces: Record<Surface, string> = {
  "1": "bg-surface-1 border border-line",
  "2": "bg-surface-2 border border-line",
  glass: "bg-white/10 border border-white/15 backdrop-blur-md",
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  surface?: Surface;
  /** Add a subtle hover lift + border highlight. */
  interactive?: boolean;
  children: React.ReactNode;
}

/** Standard surface card: consistent radius, border, and optional hover. */
const Card: React.FC<CardProps> = ({
  surface = "1",
  interactive = false,
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        "rounded-2xl p-6 shadow-sm",
        surfaces[surface],
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand/40",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
