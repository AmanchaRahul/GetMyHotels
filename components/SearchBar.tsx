import React, { useState } from 'react';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask GetMyHotels a question"
        className="w-full h-16 pl-8 pr-20 rounded-full border border-gray-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 outline-none text-lg text-gray-700 placeholder-gray-400 bg-white transition-all"
      />
      <button type="submit" className="absolute right-2 top-2 bottom-2 w-12 rounded-full bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#8B5CF6] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all z-10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M16 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M8 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M20 10V14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M4 10V14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;