import React from 'react';
import { CheckCircle } from 'lucide-react';

const Softwares:React.FC = () => {
  const softwares = [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe Premier Pro'
  ];

  return (
    <div>
      <h2 className="text-2xl fraunces mb-6">Softwares</h2>
      <div className="space-y-3">
        {softwares.map((software, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm">{software}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Softwares;