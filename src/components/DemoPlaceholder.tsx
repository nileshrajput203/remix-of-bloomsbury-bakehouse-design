interface DemoPlaceholderProps {
  label: string;
  className?: string;
}

const DemoPlaceholder = ({ label, className = "" }: DemoPlaceholderProps) => {
  return (
    <div className={`w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center ${className}`}>
      <span className="text-2xl md:text-4xl font-serif text-dark-foreground/80 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
};

export default DemoPlaceholder;
