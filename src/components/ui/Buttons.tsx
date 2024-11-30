import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  icon?: boolean;
}

export function Button({ 
  variant = 'primary', 
  children, 
  icon = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm flex items-center gap-2";
  const variants = {
    primary: "bg-black text-white hover:bg-black/90",
    outline: "border border-black/20 hover:border-black/40"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowUpRight className="w-4 h-4" />}
    </button>
  );
}