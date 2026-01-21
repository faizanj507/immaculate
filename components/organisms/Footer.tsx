import React from 'react';
import Image from 'next/image';
import { Text } from '../atoms/Text';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0E1A] py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 border-b border-white/10 pb-8 sm:pb-10 md:pb-12 mb-8 sm:mb-10 md:mb-12">
          <div className="relative w-[160px] h-[40px] sm:w-[180px] sm:h-[45px] brightness-0 invert">
            <Image 
              src="https://immaculateclean.com/wp-content/uploads/Immaculate_Clean_Logo_Final_1.png" 
              alt="Immaculate Clean Logo" 
              fill 
              className="object-contain"
            />
          </div>
          
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-center">
            <a href="#contact" className="text-xs sm:text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors py-2">Contact Us</a>
            <a href="tel:4105490727" className="text-xs sm:text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors py-2">(410) 549-0727</a>
            <a href="mailto:customerservice@immaculateclean.com" className="text-xs sm:text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors py-2 break-all">customerservice@immaculateclean.com</a>
          </nav>

          <div className="flex gap-4 sm:gap-6">
            <a href="https://www.facebook.com/ImmaculateCleanInc" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" title="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
            <a href="https://www.yelp.com/biz/immaculate-clean-eldersburg-2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" title="Yelp">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32"><path d="M13.961 22.279c0.246-0.273 0.601-0.444 0.995-0.444 0.739 0 1.338 0.599 1.338 1.338 0 0.016-0 0.032-0.001 0.048l0-0.002-0.237 6.483c-0.027 0.719-0.616 1.293-1.34 1.293-0.077 0-0.153-0.006-0.226-0.019l0.008 0.001c-1.763-0.303-3.331-0.962-4.69-1.902l0.039 0.025c-0.351-0.245-0.578-0.647-0.578-1.102 0-0.346 0.131-0.661 0.346-0.898l-0.001 0.001 4.345-4.829zM12.853 20.434l-6.301 1.572c-0.097 0.025-0.208 0.039-0.322 0.039-0.687 0-1.253-0.517-1.332-1.183l-0.001-0.006c-0.046-0.389-0.073-0.839-0.073-1.295 0-1.324 0.223-2.597 0.635-3.781l-0.024 0.081c0.183-0.534 0.681-0.911 1.267-0.911 0.214 0 0.417 0.050 0.596 0.14l-0.008-0.004 5.833 2.848c0.45 0.221 0.754 0.677 0.754 1.203 0 0.623-0.427 1.147-1.004 1.294l-0.009 0.002zM13.924 15.223l-6.104-10.574c-0.112-0.191-0.178-0.421-0.178-0.667 0-0.529 0.307-0.987 0.752-1.204l0.008-0.003c1.918-0.938 4.153-1.568 6.511-1.761l0.067-0.004c0.031-0.003 0.067-0.004 0.104-0.004 0.738 0 1.337 0.599 1.337 1.337 0 0.001 0 0.001 0 0.002v-0 12.207c-0 0.739-0.599 1.338-1.338 1.338-0.493 0-0.923-0.266-1.155-0.663l-0.003-0.006zM19.918 20.681l6.176 2.007c0.541 0.18 0.925 0.682 0.925 1.274 0 0.209-0.048 0.407-0.134 0.584l0.003-0.008c-0.758 1.569-1.799 2.889-3.068 3.945l-0.019 0.015c-0.23 0.19-0.527 0.306-0.852 0.306-0.477 0-0.896-0.249-1.134-0.625l-0.003-0.006-3.449-5.51c-0.128-0.201-0.203-0.446-0.203-0.709 0-0.738 0.598-1.336 1.336-1.336 0.147 0 0.289 0.024 0.421 0.068l-0.009-0.003zM26.197 16.742l-6.242 1.791c-0.11 0.033-0.237 0.052-0.368 0.052-0.737 0-1.335-0.598-1.335-1.335 0-0.282 0.087-0.543 0.236-0.758l-0.003 0.004 3.63-5.383c0.244-0.358 0.65-0.59 1.111-0.59 0.339 0 0.649 0.126 0.885 0.334l-0.001-0.001c1.25 1.104 2.25 2.459 2.925 3.99l0.029 0.073c0.070 0.158 0.111 0.342 0.111 0.535 0 0.608-0.405 1.121-0.959 1.286l-0.009 0.002z" /></svg>
            </a>
            <a href="https://www.google.com/maps/place/Immaculate+Clean+Inc./data=!4m2!3m1!1s0x0:0xb8749a6f1dae535c?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" title="Google Maps">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </a>
            <a href="https://www.angi.com/companylist/us/md/sykesville/immaculate-clean-inc-reviews-9838225.htm" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" title="Angi">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0L1.5 4.5V11c0 6.46 4.48 12.51 10.5 14 6.02-1.49 10.5-7.54 10.5-14V4.5L12 0z" /></svg>
            </a>
            <a href="https://www.youtube.com/@ImmaculateCleanServices" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" title="YouTube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <Text variant="xs" color="white" className="opacity-40 uppercase tracking-widest font-bold text-[10px] sm:text-xs">
            Copyright © 2026 Immaculate Clean Inc.
          </Text>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            <a href="#" className="text-[10px] sm:text-xs uppercase font-black tracking-widest text-white/40 hover:text-white transition-colors py-2">Privacy Policy</a>
            <a href="#" className="text-[10px] sm:text-xs uppercase font-black tracking-widest text-white/40 hover:text-white transition-colors py-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
