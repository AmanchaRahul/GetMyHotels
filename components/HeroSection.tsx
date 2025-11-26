import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl group cursor-pointer">
      <img 
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
        alt="Traveler looking at mountains" 
        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90"></div>
      <div className="absolute bottom-6 left-6 pr-6">
        <h2 className="text-white text-3xl font-bold leading-tight drop-shadow-md">
          Step into your travel era
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;