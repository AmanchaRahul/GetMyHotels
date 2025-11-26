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
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask GetMyHotels a question"
        className="w-full h-16 pl-8 pr-20 rounded-[14px] border border-[rgba(255,255,255,0.1)] focus:border-[rgba(255,255,255,0.2)] outline-none text-lg text-[#F5F5F7] placeholder-[rgba(255,255,255,0.45)] bg-[rgba(255,255,255,0.07)] backdrop-blur-[14px] transition-all"
      />
      <button type="submit" className="absolute right-2 top-2 bottom-2 w-12 rounded-full bg-[rgba(255,255,255,0.10)] border border-[rgba(255,255,255,0.15)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.14)] transition-all z-10">
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