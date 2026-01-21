import React from 'react';
import { Text } from '../atoms/Text';

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ label, children, className = '' }) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      <label className="text-sm font-semibold text-black uppercase tracking-wider">{label}</label>
      {children}
    </div>
  );
};


