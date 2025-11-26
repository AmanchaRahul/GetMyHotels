import React from 'react';
import { BedDouble, Plane, Map, Tag, UserRound } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    { icon: <BedDouble size={18} className="text-[#E5E5E7]" />, label: 'Find my Hotel' },
    { icon: <Plane size={18} className="text-[#E5E5E7]" />, label: 'Search Flights' },
    { icon: <Map size={18} className="text-[#E5E5E7]" />, label: 'Destination Ideas' },
    { icon: <Tag size={18} className="text-[#E5E5E7]" />, label: 'Deals & Offers' },
    { icon: <UserRound size={18} className="text-[#E5E5E7]" />, label: 'Trip Support' },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action, index) => (
        <button
          key={index}
          className="flex items-center gap-2 px-5 py-3 bg-[rgba(255,255,255,0.06)] rounded-xl border border-[rgba(255,255,255,0.08)] shadow-[0_4px_14px_rgba(0,0,0,0.3)] hover:bg-[rgba(255,255,255,0.1)] transition-all active:scale-95 text-[0.95rem] font-medium text-[#E5E5E7] whitespace-nowrap"
        >
          {action.icon}
          <span>{action.label}</span>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;