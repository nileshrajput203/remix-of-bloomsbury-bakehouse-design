import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SidebarCardProps {
  label: string;
  imageSrc?: string;
  demoLabel?: string;
  to: string;
}

const SidebarCard = ({ label, imageSrc, demoLabel, to }: SidebarCardProps) => {
  return (
    <Link 
      to={to} 
      className="group block relative w-full h-full overflow-hidden"
    >
      {/* Image Container */}
      <div className="w-full h-full overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={label}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 flex items-center justify-center transition-transform duration-700 group-hover:scale-110 relative">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%),
                               radial-gradient(circle at 80% 50%, hsl(var(--accent) / 0.1) 0%, transparent 50%)`
            }} />
            <span className="text-base sm:text-lg font-serif text-foreground/50 uppercase tracking-widest relative z-10">
              {demoLabel || "Demo"}
            </span>
          </div>
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Label Overlay - Bottom Right */}
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-5 lg:right-5 flex items-center gap-2 sm:gap-3 glass px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full transition-all duration-500 group-hover:shadow-lg group-hover:bg-card">
        <span className="text-xs sm:text-sm font-medium text-foreground uppercase tracking-wide">
          {label}
        </span>
        <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
          <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
      </div>

      {/* Top corner accent line - hidden on small screens */}
      <div className="hidden sm:block absolute top-0 left-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-4 left-4 w-8 h-px bg-primary/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        <div className="absolute top-4 left-4 h-8 w-px bg-primary/40 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100" />
      </div>
    </Link>
  );
};

export default SidebarCard;