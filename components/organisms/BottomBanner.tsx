import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export const BottomBanner: React.FC = () => {
  return (
    <section className="py-24 bg-primary text-black relative">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl">
        <Heading level={2} className="mb-6 !text-black">
          Residential Cleaning Services
        </Heading>
        <Text weight="bold" className="text-xl mb-12 !text-black">
          850+ 5 Star Reviews on Google.
        </Text>
        
        <div className="max-w-3xl mx-auto space-y-8 mb-12">
          <Text className="text-lg font-medium leading-relaxed">
            If you're looking for top-quality home cleaning services from a trusted local company, Immaculate Clean is ready to deliver.
          </Text>
          <Text className="text-lg font-medium leading-relaxed">
            Hit 'Request a Quote' or 'Call Now' - let us take cleaning off your plate so you can get back to living.
          </Text>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="tel:4105490727">
            <Button variant="secondary" className="!px-12 !py-5 shadow-xl">Call Now</Button>
          </a>
          <a href="#contact">
            <Button variant="primary" className="!px-12 !py-5 !bg-black !text-white !border-black hover:!bg-gray-900 shadow-xl">Request a Quote</Button>
          </a>
        </div>
      </div>
    </section>
  );
};
