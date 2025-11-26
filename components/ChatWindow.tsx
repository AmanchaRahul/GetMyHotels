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
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M16 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M8 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">AI Assistant</h2>
              <p className="text-sm text-gray-500">GetMyHotels Chat</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onNewConversation}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              title="Start New Conversation"
            >
              <Plus size={16} />
              New Chat
            </button>
            <button
              onClick={onClearConversation}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              title="Clear Conversation"
            >
              <RotateCcw size={16} />
              Clear
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
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
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#8B5CF6] flex items-center justify-center mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M16 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M8 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M20 10V14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M4 10V14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Start a New Conversation</h3>
              <p className="text-sm text-gray-500 max-w-md">
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
                      ? 'bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#8B5CF6] text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Chat Input */}
        <div className="p-6 border-t border-gray-200 bg-white">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message here..."
              className="w-full h-14 pl-6 pr-16 rounded-full border-2 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-base text-gray-700 placeholder-gray-400 bg-white transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 w-10 rounded-full bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#8B5CF6] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
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
        <div className="px-4 py-3 bg-gray-50 rounded-b-2xl">
          <p className="text-xs text-center text-gray-500">
            Powered by GetMyHotels AI • {messages.length} message{messages.length !== 1 ? 's' : ''} in conversation
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
