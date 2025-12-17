import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SidebarCardProps {
  label: string;
  imageSrc: string;
  to: string;
}

const SidebarCard = ({ label, imageSrc, to }: SidebarCardProps) => {
  return (
    <Link to={to} className="sidebar-card block group">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex justify-between items-center">
        <span className="text-lg font-normal uppercase tracking-widest text-card-foreground">
          {label}
        </span>
        <ArrowRight className="w-5 h-5 text-card-foreground transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default SidebarCard;
