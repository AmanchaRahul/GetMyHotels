import React from 'react';
import Card from './Card';

const MoreFromGetMyHotels: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="text-[#0045B2] text-2xl font-bold mb-4">
        More from GetMyHotels
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2044&auto=format&fit=crop"
          badge="BETA AI"
          title="Neighborhood Navigator"
          overlayText="Neighborhood Navigator"
          description="Explore the world, neighborhood by neighborhood."
          linkText="Explore Neighborhood Navigator"
        />
        <Card
          image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
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