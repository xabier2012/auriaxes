import React from 'react';
import { CheckCircle } from 'lucide-react';

const ServiceCard = ({ id, icon: Icon, title, description, items, variant = 'amber' }) => {
  const isAmber = variant === 'amber';
  
  return (
    <div id={id} className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 ${isAmber ? 'border-auria-green-400' : 'border-auria-black'} group text-center h-full flex flex-col`}>
      <div className={`w-20 h-20 ${isAmber ? 'bg-auria-green-50 text-auria-green-600' : 'bg-slate-50 text-auria-black'} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm group-hover:scale-110 ${isAmber ? 'group-hover:bg-auria-green-500' : 'group-hover:bg-auria-black'} group-hover:text-white transition-all duration-300 group-hover:shadow-lg`}>
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <h4 className="text-xl font-bold mb-3 text-auria-black">{title}</h4>
      <p className="text-slate-600 mb-4 text-sm flex-grow">
        {description}
      </p>
      <ul className="space-y-2 text-sm text-slate-500 text-left mx-auto w-fit">
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
