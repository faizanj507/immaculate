import React from 'react';
import Image from 'next/image';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export const CompanyOfChoice: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden relative border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 h-[400px] sm:h-[500px] md:h-[650px]">
            <div className="space-y-4 h-full">
              <div className="relative h-2/5 rounded-2xl overflow-hidden shadow-lg group">
                <Image 
                  src="/Alicia-Stops-By-On-Turn-In-Thurs.webp"
                  alt="Alicia from Immaculate Clean"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative h-3/5 rounded-2xl overflow-hidden shadow-lg group">
                <Image 
                  src="/Cassie-Smiles-While-Cleaning-A-T.webp"
                  alt="Cassie cleaning a home"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-4 h-full pt-12">
              <div className="relative h-3/5 rounded-2xl overflow-hidden shadow-lg group">
                <Image 
                  src="/Kassie-Smiles-While-Cleaning-A-B.webp"
                  alt="Kristin vacuuming"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative h-2/5 rounded-2xl overflow-hidden shadow-lg group">
                <Image 
                  src="/Janelle-Smiles-As-She-Reviews-Se.webp"
                  alt="Janelle reviewing service"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="">
            <Heading level={2} className="mb-6 sm:mb-8 md:mb-10">
              Maryland's Cleaning <br className="hidden sm:block" /><span className="text-secondary">Company of Choice</span>
            </Heading>
            <Text variant="large" color="gray" className="mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg">
              We're not a faceless chain - we're locally owned family-oriented business rooted in Central Maryland. We know our clients are neighbors; we commit to:
            </Text>

            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 md:mb-12">
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                <Text weight="bold">Respect: <span className="font-normal text-text-muted">treating your home like our own</span></Text>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                <Text weight="bold">Reliability: <span className="font-normal text-text-muted">showing up when we say we will.</span></Text>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                <Text weight="bold">Safety: <span className="font-normal text-text-muted">background-checked staff, bonded and insured, and secure payment practices.</span></Text>
              </div>
            </div>

            <Text variant="body" weight="semibold" className="mb-12 italic text-secondary border-l-4 border-primary pl-6">
              Join the hundreds of satisfied Maryland homeowners who trust Immaculate Clean for a cleaner, healthier home.
            </Text>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="tel:4105490727" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto !px-8 sm:!px-12 !py-4 sm:!py-5">Call Now</Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto !px-8 sm:!px-12 !py-4 sm:!py-5">Request a Quote</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
