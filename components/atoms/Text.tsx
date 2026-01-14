import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'body' | 'small' | 'large' | 'xs';
  color?: 'black' | 'white' | 'gray' | 'muted';
  weight?: 'normal' | 'semibold' | 'bold';
}

export const Text: React.FC<TextProps> = ({ 
  children, 
  className = '', 
  variant = 'body',
  color = 'black',
  weight = 'normal'
}) => {
  const sizeStyles = {
    xs: 'text-xs',
    small: 'text-sm',
    body: 'text-base leading-relaxed',
    large: 'text-lg md:text-xl leading-relaxed',
  };

  const colorStyles = {
    black: 'text-text-main',
    white: 'text-white',
    gray: 'text-text-muted',
    muted: 'text-gray-500',
  };

  const weightStyles = {
    normal: 'font-normal',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <p className={`${sizeStyles[variant]} ${colorStyles[color]} ${weightStyles[weight]} ${className}`}>
      {children}
    </p>
  );
};

