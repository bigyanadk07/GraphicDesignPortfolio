import React from 'react';
import { LogoGrid } from '../components/Logofolio/LogoGrid';
import { PageHeader } from '../components/Logofolio/PageHeader';
import EndofPage from '../components/ui/EndofPage.svg'

export const LogofolioPage:React.FC = () =>{
  return (
    <section className="min-h-screen bg-herobg">
      <div className="container mx-auto px-24 py-24">
        <PageHeader />
        <LogoGrid />
        <img src={EndofPage} alt="" className='w-full h-20'/>
      </div>
    </section>
  );
}