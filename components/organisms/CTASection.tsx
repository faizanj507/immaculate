import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24  text-center bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Heading level={2} className="mb-10">
          Speak directly with a friendly team member who can answer questions and help book your <span className="text-primary italic">first clean.</span>
        </Heading>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <a href="tel:4105490727">
            <Button variant="secondary" className="!px-12 !py-5 shadow-xl">Call Now</Button>
          </a>
        </div>

        <Text variant="body" weight="semibold" color="gray" className="max-w-2xl mx-auto border-t border-gray-100 pt-10">
          No contracts, no pressure, just honest pricing, transparent service, and a sparkling clean home.
        </Text>
      </div>
    </section>
  );
};
