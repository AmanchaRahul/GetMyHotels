import React from 'react';
import { BedDouble, Plane, Map, Tag, UserRound } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    { icon: <BedDouble size={18} className="text-blue-600" />, label: 'Find my Hotel' },
    { icon: <Plane size={18} className="text-blue-500" />, label: 'Search Flights' },
    { icon: <Map size={18} className="text-cyan-500" />, label: 'Destination Ideas' },
    { icon: <Tag size={18} className="text-amber-500" />, label: 'Deals & Offers' },
    { icon: <UserRound size={18} className="text-orange-500" />, label: 'Trip Support' },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action, index) => (
        <button 
          key={index}
          className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow active:scale-95 text-[0.95rem] font-bold text-blue-600 whitespace-nowrap"
        >
          {action.icon}
          <span>{action.label}</span>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;