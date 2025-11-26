import React from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

interface ChatResponseProps {
  messages: Message[];
}

const ChatResponse: React.FC<ChatResponseProps> = ({ messages }) => {
  if (messages.length === 0) return null;

  return (
    <div className="w-full max-w-2xl space-y-4 mt-6">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] p-4 rounded-2xl ${
              message.isUser
                ? 'bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#8B5CF6] text-white'
                : 'bg-white text-gray-800 shadow-md border border-gray-100'
            }`}
          >
            <p className="text-sm leading-relaxed">{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatResponse;
