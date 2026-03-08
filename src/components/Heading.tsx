import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3";

interface HeadingProps {
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}

/**
 * Heading — Componente de título con jerarquía tipográfica.
 * Usa la fuente Outfit automáticamente vía CSS base.
 */
const Heading = ({ as: Tag = "h2", children, className, subtitle }: HeadingProps) => {
  return (
    <div className="text-center mb-16">
      <Tag className={cn(className)}>
        {children}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
