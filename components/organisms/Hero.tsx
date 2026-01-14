import React from 'react';
import Image from 'next/image';
import { Heading } from '../atoms/Heading';
import { Button } from '../atoms/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 order-2 lg:order-1">
          <Heading level={1} className="mb-8 text-balance">
            Trusted Home Cleaning Service for Maryland Homes
          </Heading>
          
          <div className="flex items-center gap-2 mb-10">
            <span className="text-xl font-black text-text-main">850+</span>
            <span className="text-sm uppercase tracking-widest text-text-muted font-bold">5 Star Reviews on Google.</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:4105490727">
              <Button variant="primary" className="!px-12 !py-5 shadow-lg">Call Now</Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="!px-12 !py-5">Request a Quote</Button>
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
          <Image 
            src="https://immaculateclean.com/wp-content/uploads/IMC-Fallback.webp"
            alt="Immaculate Clean Home"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gray-50/50 skew-x-[-12deg] translate-x-1/2" />
    </section>
  );
};
