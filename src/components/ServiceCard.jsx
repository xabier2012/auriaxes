import React from 'react';
import { CheckCircle } from 'lucide-react';

const ServiceCard = ({ id, icon: Icon, title, description, items, variant = 'amber' }) => {
  const isAmber = variant === 'amber';
  
  return (
    <div id={id} className={`bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 ${isAmber ? 'border-auria-green-400' : 'border-auria-black'} group text-center h-full flex flex-col`}>
      <div className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 ${isAmber ? 'bg-auria-green-50 text-auria-green-600' : 'bg-slate-50 text-auria-black'} rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 mx-auto shadow-sm group-hover:scale-110 ${isAmber ? 'group-hover:bg-auria-green-500' : 'group-hover:bg-auria-black'} group-hover:text-white transition-all duration-300 group-hover:shadow-lg`}>
        <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" strokeWidth={1.5} />
      </div>
      <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-auria-black">{title}</h4>
      <p className="text-slate-600 mb-3 sm:mb-4 text-xs sm:text-sm flex-grow">
        {description}
      </p>
      <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-500 text-left mx-auto w-fit">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle size={14} className="text-green-500 flex-shrink-0" /> 
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
