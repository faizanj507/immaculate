import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'px-6 py-4 font-bold transition-all duration-200 text-center tracking-wide inline-flex items-center justify-center gap-2 uppercase text-[13px] cursor-pointer';
  const variantStyles = {
    primary: 'bg-primary text-black hover:bg-primary-dark shadow-sm hover:shadow-md',
    secondary: 'bg-secondary text-white hover:bg-opacity-90',
    outline: 'border-2 border-black text-black bg-transparent hover:bg-black hover:text-white',
    white: 'bg-white text-black hover:bg-gray-100',
    ghost: 'bg-transparent text-black hover:bg-gray-50 border-b-2 border-transparent hover:border-black rounded-none px-0 py-2',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

