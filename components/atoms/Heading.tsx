import React from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'black' | 'white';
}

export const Heading: React.FC<HeadingProps> = ({ 
  level = 2, 
  children, 
  className = '', 
  color = 'black' 
}) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  
  const sizeStyles = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]',
    2: 'text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight',
    3: 'text-2xl md:text-3xl lg:text-4xl font-bold',
    4: 'text-xl md:text-2xl font-bold',
    5: 'text-lg md:text-xl font-bold uppercase tracking-wider',
    6: 'text-base md:text-lg font-bold uppercase tracking-widest',
  };

  const colorStyles = {
    primary: 'text-primary-dark', // Use darker green for text contrast
    secondary: 'text-secondary',
    black: 'text-text-main',
    white: 'text-white',
  };

  return (
    <Tag className={`${sizeStyles[level]} ${colorStyles[color]} ${className}`}>
      {children}
    </Tag>
  );
};

