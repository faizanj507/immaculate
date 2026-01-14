import React from 'react';
import Image from 'next/image';
import { Button } from '../atoms/Button';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 py-4 shadow-sm">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="/" className="block cursor-pointer">
          <div className="relative w-[180px] h-[45px] md:w-[220px] md:h-[55px]">
            <Image 
              src="https://immaculateclean.com/wp-content/uploads/Immaculate_Clean_Logo_Final_1.png" 
              alt="Immaculate Clean Logo" 
              fill 
              className="object-contain object-left"
              priority
            />
          </div>
        </a>
        
        <nav className="hidden xl:flex items-center gap-10">
          <a href="#services" className="text-sm font-bold uppercase tracking-wider text-text-main hover:text-primary transition-colors cursor-pointer">Services</a>
          <a href="#why-us" className="text-sm font-bold uppercase tracking-wider text-text-main hover:text-primary transition-colors cursor-pointer">About</a>
          <a href="#contact" className="text-sm font-bold uppercase tracking-wider text-text-main hover:text-primary transition-colors cursor-pointer">Contact</a>
        </nav>

        <div className="flex items-center gap-4 md:gap-8">
          <a href="tel:4105490727" className="hidden lg:flex flex-col items-end hover:text-primary transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Maryland</span>
            <span className="text-sm font-black tracking-tight">(410) 549-0727</span>
          </a>
          <a href="#contact">
            <Button variant="primary" className="!py-3 !px-6 shadow-none hover:shadow-none">Request Quote</Button>
          </a>
        </div>
      </div>
    </header>
  );
};
