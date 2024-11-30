import React from 'react';

export const PageHeader:React.FC = () => {
  return (
    <div className="mb-24">
      <div className="space-y-1">
        <h2 className="text-3xl font-medium text-gray-900 fraunces">Logo<span className='text-orange-400'>folio</span></h2>
      </div>
    </div>
  );
}