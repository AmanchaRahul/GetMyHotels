import React, { useState } from 'react';
import { X, RotateCcw, Plus } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
}

interface ChatWindowProps {
  messages: Message[];
  onClose: () => void;
  onClearConversation: () => void;
  onNewConversation: () => void;
  onSendMessage: (message: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  onClose,
  onClearConversation,
  onNewConversation,
  onSendMessage
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[rgba(255,255,255,0.06)] backdrop-blur-[22px] rounded-[24px] shadow-[0_12px_32px_rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.1)] w-full max-w-3xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.15)] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M16 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M8 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#E5E5E7]">AI Assistant</h2>
              <p className="text-sm text-[#A9A9B3]">GetMyHotels Chat</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onNewConversation}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#E5E5E7] bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)] rounded-lg transition-colors border border-[rgba(255,255,255,0.1)]"
              title="Start New Conversation"
            >
              <Plus size={16} className="text-[#D6D6D9]" />
              New Chat
            </button>
            <button
              onClick={onClearConversation}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#E5E5E7] bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)] rounded-lg transition-colors border border-[rgba(255,255,255,0.1)]"
              title="Clear Conversation"
            >
              <RotateCcw size={16} className="text-[#D6D6D9]" />
              Clear
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#D6D6D9] hover:text-[#E5E5E7] hover:bg-[rgba(255,255,255,0.08)] rounded-lg transition-colors"
              title="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.15)] flex items-center justify-center mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M16 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M8 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M20 10V14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M4 10V14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#E5E5E7] mb-2">Start a New Conversation</h3>
              <p className="text-sm text-[#A9A9B3] max-w-md">
                Ask me anything about hotels, destinations, or travel recommendations. I'm here to help you find your perfect stay!
              </p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] p-4 rounded-2xl ${
                    message.isUser
                      ? 'bg-[rgba(255,255,255,0.14)] text-white rounded-br-sm'
                      : 'bg-[rgba(255,255,255,0.06)] text-[#E3E3E6] border border-[rgba(255,255,255,0.08)] rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Chat Input */}
        <div className="p-6 border-t border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)]">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message here..."
              className="w-full h-14 pl-6 pr-16 rounded-2xl border border-[rgba(255,255,255,0.1)] focus:border-[rgba(255,255,255,0.2)] outline-none text-base text-[#F5F5F7] placeholder-[rgba(255,255,255,0.45)] bg-[rgba(255,255,255,0.08)] backdrop-blur-[10px] transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 w-10 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.15)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.14)] transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M16 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M8 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M20 10V14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M4 10V14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-[rgba(255,255,255,0.03)] rounded-b-[24px] border-t border-[rgba(255,255,255,0.08)]">
          <p className="text-xs text-center text-[rgba(255,255,255,0.5)]">
            Powered by GetMyHotels AI • {messages.length} message{messages.length !== 1 ? 's' : ''} in conversation
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
