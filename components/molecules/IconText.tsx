import React from 'react';
import { Text } from '../atoms/Text';

interface IconTextProps {
  icon?: React.ReactNode;
  title?: string;
  description: string;
  className?: string;
}

export const IconText: React.FC<IconTextProps> = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`flex gap-3 ${className}`}>
      {icon && <div className="mt-1 flex-shrink-0 text-primary">{icon}</div>}
      <div>
        <Text variant="body">
          {title && <span className="font-bold">{title}</span>}
          {title && ' - '}
          {description}
        </Text>
      </div>
    </div>
  );
};




