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
    <Link to={to} className="group block relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="aspect-[16/9] overflow-hidden bg-gray-200">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={label}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <span className="text-lg font-serif text-foreground/80 uppercase tracking-widest">
              {demoLabel || "Demo"}
            </span>
          </div>
        )}
      </div>

      {/* Overlay gradient for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Label positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center z-10">
        <span className="text-sm lg:text-base font-normal uppercase tracking-widest text-white">
          {label}
        </span>
        <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default SidebarCard;
