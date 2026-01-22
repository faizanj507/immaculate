import React from 'react';
import Image from 'next/image';
import { Heading } from '../atoms/Heading';
import { Button } from '../atoms/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row bg-gray-50 overflow-hidden">
      {/* Split Layout: Content Left, Image Right */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-0">
        {/* Logo */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <a href="/" className="inline-block">
            <div className="relative w-[180px] h-[45px] sm:w-[200px] sm:h-[50px] md:w-[240px] md:h-[60px]">
              <Image 
                src="https://immaculateclean.com/wp-content/uploads/Immaculate_Clean_Logo_Final_1.png" 
                alt="Immaculate Clean Logo" 
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </a>
        </div>

        {/* Main Content */}
        <div className="max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-main mb-4 sm:mb-6 text-balance leading-tight">
            Trusted Home Cleaning Service for Maryland Homes
          </h1>
          
          {/* Google Reviews Badge */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 p-3 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm w-full sm:w-fit">
            <div className="flex items-center gap-1.5 sm:gap-2 grow">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex items-center gap-0.5 sm:gap-1">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-text-main">850+</span>
              <span className="text-[10px] sm:text-xs text-text-muted">Google Reviews</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-text-muted mb-8 sm:mb-10 leading-relaxed font-normal">
            Reliable, high-quality, and honest cleaning service for Maryland homes since 2004.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="tel:4105490727" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto !px-8 sm:!px-10 !py-4 sm:!py-5 text-sm sm:text-base">
                Call Now
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto !px-8 sm:!px-10 !py-4 sm:!py-5 text-sm sm:text-base">
                Request a Quote
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Image - Right Side */}
      <div className="hidden lg:block w-1/2 relative">
        <div className="absolute inset-0">
          <Image 
            src="/Kassie-Smiles-While-Cleaning-A-B.webp"
            alt="Clean, modern home interior - professional cleaning service"
            fill
            unoptimized
            className="object-cover"
            priority
          />
        </div>
      </div>
      
      {/* Mobile Image - Below Content */}
      <div className="lg:hidden w-full h-[300px] sm:h-[400px] relative -mx-4 sm:mx-0 mt-8">
        <Image 
          src="/Kassie-Smiles-While-Cleaning-A-B.webp"
          alt="Clean, modern home interior - professional cleaning service"
          fill
          unoptimized
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

