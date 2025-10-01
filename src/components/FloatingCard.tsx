import React from 'react';
import { ArrowRight, Video as LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FloatingCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  features: string[];
  delay?: number;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  features, 
  delay = 0 
}) => {
  return (
    <div
      className="group bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-2xl p-8 transition-all duration-300 living-card shadow-md shadow-black/5 h-full flex flex-col"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD777]/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm shadow-black/10">
        <Icon className="w-8 h-8 text-[#D4AF37] transition-transform duration-300" />
      </div>

      <h3 className="text-xl font-['Playfair_Display'] font-bold mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
        {title}
      </h3>

      <p className="text-[#ECE8E3]/70 mb-6 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-2 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-[#ECE8E3]/60">
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3 flex-shrink-0 living-icon" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Link
          to={link}
          className="inline-flex items-center text-[#D4AF37] hover:text-[#FFD777] transition-all duration-300 font-medium"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default FloatingCard;