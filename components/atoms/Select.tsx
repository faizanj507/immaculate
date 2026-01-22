import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
  error?: string;
}

export const Select: React.FC<SelectProps> = ({ options, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      <select
        className={`w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-primary transition-colors bg-white appearance-none ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};





