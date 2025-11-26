import React from 'react';
import Card from './Card';

const MoreFromGetMyHotels: React.FC = () => {
  return (
    <div className="w-full mt-8">
      <h2 className="text-[#0045B2] text-3xl font-bold mb-6">
        More from GetMyHotels
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card 
          image="https://images.unsplash.com/photo-1542259659-579399581164?q=80&w=2070&auto=format&fit=crop"
          badge="BETA AI"
          title="Neighborhood Navigator"
          overlayText="Neighborhood Navigator"
          description="Explore the world, neighborhood by neighborhood."
          linkText="Explore Neighborhood Navigator"
        />
        <Card 
          image="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=2064&auto=format&fit=crop"
          title="Your 2026 starts here"
          overlayText="2026 Travel Trends"
          description="Dive into GetMyHotels's travel trend predictions and plan the trip everyone will be talking about."
          linkText="Learn More"
        />
      </div>
    </div>
  );
};

export default MoreFromGetMyHotels;