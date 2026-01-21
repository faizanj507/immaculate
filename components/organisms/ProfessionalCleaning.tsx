import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export const ProfessionalCleaning: React.FC = () => {
  const features = [
    {
      description: "A friendly, professionally-equipped team with all supplies and tools needed.",
    },
    {
      description: "A methodical, top-to-bottom cleaning routine, floor to ceiling, room by room.",
    },
    {
      description: "Attention to detail, we follow comprehensive checklists to ensure nothing is overlooked.",
    },
    {
      description: "If you're home, a quick walk-through at the end to confirm you're satisfied.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <Heading level={2} className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Professional Home Cleaning Done Right
          </Heading>
          <Text variant="large" color="gray" className="text-base sm:text-lg">
            When we arrive, expect the full Immaculate Clean experience:
          </Text>
        </div>

        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="space-y-4 sm:space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 border-l-4 border-primary bg-gray-50/50 hover:bg-gray-50 transition-colors duration-300">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <Text variant="body" color="gray" className="leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          <a href="tel:4105490727" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto !px-8 sm:!px-12 !py-4 sm:!py-5 shadow-lg">Call Now</Button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full sm:w-auto !px-8 sm:!px-12 !py-4 sm:!py-5">Request a Quote</Button>
          </a>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <Text variant="large" weight="bold" className="text-secondary">
            We protect your time, your home, and your peace of mind.
          </Text>
        </div>
      </div>
    </section>
  );
};
