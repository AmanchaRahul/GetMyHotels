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
    <div className="bg-[rgba(255,255,255,0.06)] backdrop-blur-[18px] rounded-[20px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-[rgba(255,255,255,0.08)] flex flex-col h-full">
      <div className="relative w-full aspect-[16/9]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.55)] to-[rgba(0,0,0,0.1)]"></div>

        {/* Centered Overlay Text */}
        {overlayText && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                 {/* Badge if present */}
                {badge && (
                    <span className="mb-2 bg-[rgba(255,255,255,0.15)] backdrop-blur-sm px-3 py-1 rounded-md text-[11px] font-bold text-[#F5F5F7] tracking-wide uppercase border border-[rgba(255,255,255,0.1)]">
                        {badge}
                    </span>
                )}
                <h3 className="text-white text-2xl font-extrabold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] leading-tight text-center">
                    {overlayText.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                </h3>
            </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] rounded-b-[16px]">
        <h3 className="text-base font-semibold text-[#F5F5F7] mb-2">{title}</h3>
        <p className="text-[#A9A9B3] text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        <a href="#" className="inline-block text-[#4CC7F6] font-semibold text-sm hover:underline">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default Card;