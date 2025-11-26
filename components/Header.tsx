import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.15] text-black tracking-tight">
        Nice to meet you, I'm <span className="whitespace-nowrap">GetMyHotels!</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-800 font-normal">
        Skip the search and get personalized travel recommendations.
      </p>
    </div>
  );
};

export default Header;