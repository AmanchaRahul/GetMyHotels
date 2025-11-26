import React from 'react';

interface CardProps {
  image: string;
  badge?: string;
  title: string;
  description: string;
  linkText: string;
  overlayText?: string;
}

const Card: React.FC<CardProps> = ({ image, badge, title, description, linkText, overlayText }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col h-full">
      <div className="relative w-full aspect-[1.8/1]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center rounded-t-xl rounded-b-none"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Centered Overlay Text */}
        {overlayText && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                 {/* Badge if present */}
                {badge && (
                    <span className="mb-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-md text-[10px] font-bold text-blue-600 tracking-wider uppercase border border-white">
                        {badge}
                    </span>
                )}
                <h3 className="text-white text-3xl font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] leading-none text-center">
                    {overlayText.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                </h3>
            </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-[0.95rem] leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        <a href="#" className="inline-block text-[#0068EF] font-semibold text-[0.95rem] hover:underline">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default Card;