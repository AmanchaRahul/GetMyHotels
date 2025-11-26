import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import QuickActions from './components/QuickActions';
import HeroSection from './components/HeroSection';
import MoreFromGetMyHotels from './components/MoreFromGetMyHotels';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#EBF3FE] flex justify-center p-4 sm:p-8 lg:p-12 font-sans text-gray-900">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Header, Search, Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-4 lg:pt-16">
          <Header />
          <div className="space-y-8">
            <SearchBar />
            <QuickActions />
          </div>
        </div>

        {/* Right Column: Hero Image (Spans vertical space of top section) */}
        <div className="lg:col-span-5 flex items-start lg:pt-16">
          <HeroSection />
        </div>

        {/* Bottom Section: More from GetMyHotels (Full Width or Split) 
            Looking at screenshot, it seems to be under the hero image on right, 
            or a full section. Based on flow, it's likely a new section below.
            However, in the screenshot, the "More from..." header aligns with the Right Image start,
            but the cards are displayed below. 
            Given the layout, "More from..." appears to be a section that might sit 
            below the hero image on the right, or occupy the bottom row. 
            The screenshot shows "More from Priceline" aligned with the START of the 2nd row visually.
            Let's place it in a wrapper that spans the width, but constrained.
        */}
        <div className="col-span-1 lg:col-span-12 pt-4">
           <MoreFromGetMyHotels />
        </div>

      </div>
    </div>
  );
};

export default App;