
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false,
  className,
  subtitleClassName
}: SectionHeadingProps) => {
  return (
    <div className={cn("mb-12", centered ? "text-center" : "text-left", className)}>
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-gray-300 text-lg md:text-xl max-w-3xl", 
          centered ? "mx-auto" : "",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
