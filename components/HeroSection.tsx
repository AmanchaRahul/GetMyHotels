import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden border border-[rgba(255,255,255,0.08)] shadow-[0_8px_24px_rgba(0,0,0,0.35)] group cursor-pointer">
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
        alt="Traveler looking at mountains"
        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.55)] to-[rgba(0,0,0,0.1)]"></div>
      <div className="absolute bottom-6 left-6 pr-6">
        <h2 className="text-white text-3xl font-bold leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          Step into your travel era
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;