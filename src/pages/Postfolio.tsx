import React from 'react';
import PostGrid  from '../components/Postfolio/PostGrid';
import { PageHeader } from '../components/Postfolio/PageHeader';

export const PostfolioPage:React.FC = () =>{
  return (
    <section className="min-h-screen bg-herobg py-24">
      <div className="container mx-auto px-4">
        <PageHeader />
        <PostGrid />
      </div>
    </section>
  );
}