import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

export const ProfessionalCleaning: React.FC = () => {
  const steps = [
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto mb-20">
          <Heading level={2} className="mb-6">
            Professional Home Cleaning Done Right
          </Heading>
          <Text variant="large" color="gray">
            When we arrive, expect the full Immaculate Clean experience:
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 p-10 flex flex-col items-center text-center border border-gray-100 transition-all duration-300">
              <Text weight="semibold" className="text-sm leading-relaxed text-text-main">
                {step.description}
              </Text>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Text variant="large" weight="bold" className="text-secondary opacity-60">
            We protect your time, your home, and your peace of mind.
          </Text>
        </div>
      </div>
    </section>
  );
};
