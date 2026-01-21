import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

interface CardProps {
  title?: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'quote';
}

export const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  icon, 
  className = '', 
  variant = 'default' 
}) => {
  const baseStyles = 'p-6 flex flex-col gap-4 h-full';
  const variantStyles = {
    default: 'bg-white',
    outline: 'border border-gray-100 bg-white',
    quote: 'bg-white',
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {variant === 'quote' && (
        <span className="text-secondary text-4xl font-serif">“</span>
      )}
      {icon && <div className="text-primary">{icon}</div>}
      {title && <Heading level={5} className="mb-2">{title}</Heading>}
      <Text variant="body" className="leading-relaxed">{description}</Text>
    </div>
  );
};




