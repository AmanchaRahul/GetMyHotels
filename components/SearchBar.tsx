import React from 'react';
import { AudioLines } from 'lucide-react';

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-full group">
      <input 
        type="text" 
        placeholder="Ask GetMyHotels a question" 
        className="w-full h-16 pl-8 pr-20 rounded-full border border-transparent focus:border-blue-300 focus:ring-2 focus:ring-blue-100 outline-none text-lg text-gray-700 placeholder-gray-500 bg-white transition-all"
      />
      <button className="absolute right-2 top-2 bottom-2 aspect-square rounded-full bg-gradient-to-r from-[#005CFF] to-[#9B00FF] flex items-center justify-center shadow-md hover:opacity-90 transition-opacity">
        {/* Using a custom SVG to match the waveform icon more closely than standard lucide icons if needed, 
            but AudioLines is close. Let's construct a simple waveform svg to be exact. */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 7V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M20 10V14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 10V14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;