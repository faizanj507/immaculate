import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export const CTASection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 text-center bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
        <Heading level={2} className="mb-8 sm:mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Speak directly with a friendly team member who can answer questions and help book your <span className="text-primary italic">first clean.</span>
        </Heading>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-10 sm:mb-12">
          <a href="tel:4105490727" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full sm:w-auto !px-8 sm:!px-12 !py-4 sm:!py-5 shadow-xl">Call Now</Button>
          </a>
        </div>

        <Text variant="body" weight="semibold" color="gray" className="max-w-2xl mx-auto border-t border-gray-100 pt-8 sm:pt-10 text-sm sm:text-base px-4">
          No contracts, no pressure, just honest pricing, transparent service, and a sparkling clean home.
        </Text>
      </div>
    </section>
  );
};
