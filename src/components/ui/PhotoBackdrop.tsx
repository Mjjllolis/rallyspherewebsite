import Image from "next/image";
import clsx from "clsx";

interface PhotoBackdropProps {
  src: string;
  /** Navy overlay strength over the photo (0–100). Higher = more readable. */
  overlay?: number;
  /** Object position for the photo, e.g. "center", "top". */
  position?: string;
  className?: string;
  priority?: boolean;
}

/**
 * Full-bleed photo background for navy sections. Layers the photo under a navy
 * brand overlay + grid texture so foreground text stays readable.
 */
const PhotoBackdrop: React.FC<PhotoBackdropProps> = ({
  src,
  overlay = 88,
  position = "center",
  className,
  priority = false,
}) => {
  return (
    <div className={clsx("absolute inset-0 z-0", className)} aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 surface-navy" style={{ opacity: overlay / 100 }} />
      <div className="absolute inset-0 grid-overlay opacity-50" />
    </div>
  );
};

export default PhotoBackdrop;
