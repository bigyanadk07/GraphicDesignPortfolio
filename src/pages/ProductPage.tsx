import React from 'react';
import BrandGrid  from '../components/Brandfolio/BrandGrid';
import { PageHeader } from '../components/Brandfolio/PageHeader';

const BrandPage:React.FC = () =>{
  return (
    <section className="min-h-screen bg-herobg py-24">
      <div className="container mx-auto px-4">
        <PageHeader />
        <BrandGrid />
      </div>
    </section>
  );
}

export default BrandPage;