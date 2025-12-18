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
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/50 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <span className="text-lg font-serif text-foreground/70 uppercase tracking-widest">
              {demoLabel || "Demo"}
            </span>
          </div>
        )}
      </div>

      {/* Label Overlay - Bottom Right */}
      <div className="absolute bottom-4 right-4 flex items-center gap-3 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:bg-white">
        <span className="text-sm font-medium text-foreground uppercase tracking-wide">
          {label}
        </span>
        <div className="w-6 h-6 border-2 border-foreground rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </Link>
  );
};

export default SidebarCard;
