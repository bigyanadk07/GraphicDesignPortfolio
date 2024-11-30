import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="px-4 py-1 rounded-full border border-black/10 text-sm bg-bghero">
      {children}
    </span>
  );
}