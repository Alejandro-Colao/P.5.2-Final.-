import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Aplica fondo alternativo (secondary/muted) */
  alternate?: boolean;
}

/**
 * Section — Contenedor de sección con padding y max-width coherentes.
 */
const Section = ({ children, className, alternate = false }: SectionProps) => {
  return (
    <section
      className={cn(
        "section-padding",
        alternate ? "bg-secondary/50" : "bg-background",
        className,
      )}
    >
      <div className="section-container">
        {children}
      </div>
    </section>
  );
};

export default Section;
