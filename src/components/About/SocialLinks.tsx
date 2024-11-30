import React from 'react';
import {Globe, AtSign } from 'lucide-react';

export const SocialLinks:React.FC = () =>{
  const links = [
    { icon: Globe, text: 'Web Portfolio', href: 'http://bigyanadhikari.netlify.app' },
    { icon: Globe, text: 'Dribble', href: 'https://dribbble.com/bigyanadk07' },
    { icon: AtSign, text: 'Gmail', href: 'mailto:bigyanadk07@gmail.com' }
  ];

  return (
    <div className="flex flex-wrap gap-6 items-center justify-center">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
        >
          <link.icon className="w-4 h-4" />
          <span>{link.text}</span>
        </a>
      ))}
    </div>
  );
}