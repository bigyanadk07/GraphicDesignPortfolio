import React from 'react';
import { CheckCircle } from 'lucide-react';

export const CreativeFields:React.FC =()=> {
  const fields = [
    'Logo & Branding',
    'Logo Motion',
    'Social Media Content',
    'Business Card',
    'Brand Identity Buildup',
    'Brochure/Flyer',
    'Menu & Product',
    'Presentation',
    'Problem Solving',
    'Creative Direction'
  ];

  return (
    <div>
      <h2 className="text-2xl fraunces mb-6">Creative <span className='text-orange-400'>Fields</span></h2>
      <div className="grid grid-cols-2 gap-4">
        {fields.map((field, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm">{field}</span>
          </div>
        ))}
      </div>
    </div>
  );
}