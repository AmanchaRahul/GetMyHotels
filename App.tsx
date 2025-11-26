import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import QuickActions from './components/QuickActions';
import HeroSection from './components/HeroSection';
import MoreFromGetMyHotels from './components/MoreFromGetMyHotels';
import ChatWindow from './components/ChatWindow';

interface Message {
  text: string;
  isUser: boolean;
}

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSearch = (query: string) => {
    // Add user message
    const userMessage: Message = { text: query, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    // Open chat window
    setIsChatOpen(true);

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse: Message = {
        text: `Great question! I found some amazing hotel options for "${query}". GetMyHotels has over 1,000 properties that match your search. Would you like to see luxury resorts, budget-friendly options, or boutique hotels? I can also help you find the best deals and personalized recommendations based on your travel preferences!`,
        isUser: false,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const handleClearConversation = () => {
    setMessages([]);
  };

  const handleNewConversation = () => {
    setMessages([]);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0D0F13] flex justify-center p-4 sm:p-8 lg:p-12 font-sans text-gray-900">
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

        {/* Left Column: Header, Search, Actions */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8 pt-4 lg:pt-16">
          <Header />
          <div className="space-y-8">
            <SearchBar onSubmit={handleSearch} />
            <QuickActions />
          </div>
        </div>

        {/* Right Column: Hero Image + More from GetMyHotels stacked vertically */}
        <div className="lg:col-span-6 flex flex-col space-y-6 lg:pt-16">
          <HeroSection />
          <MoreFromGetMyHotels />
        </div>

      </div>

      {/* Chat Window Modal */}
      {isChatOpen && (
        <ChatWindow
          messages={messages}
          onClose={handleCloseChat}
          onClearConversation={handleClearConversation}
          onNewConversation={handleNewConversation}
          onSendMessage={handleSearch}
        />
      )}
    </div>
  );
};

export default App;