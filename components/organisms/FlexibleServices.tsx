import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

export const FlexibleServices: React.FC = () => {
  const services = [
    {
      title: "Recurring & Scheduled Cleaning Plans",
      description: "Whether you want weekly, bi-weekly, or monthly cleanings, we help you build a rhythm that keeps your home fresh without the stress.",
    },
    {
      title: "One-Time Deep Clean, Move-In / Move-Out Services",
      description: "Need a thorough reset before or after a big change? Our one-time and move-in/move-out cleaning gives your home a fresh start - spotless from top to bottom.",
    },
    {
      title: "Customizable Cleaning to Match Your Needs",
      description: "Have pets, kids, or allergies? Prefer eco-friendly cleaning agents? Want extra attention to kitchen and bathrooms? We tailor each clean based on what matters most to your household.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0F4C81] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Heading level={2} color="white" className="mb-8">
            Flexible Residential <span className="text-primary italic">Cleaning Services</span> Built Around Your Life
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-6 p-10 bg-white/5 border-t-4 border-primary">
              <Heading level={4} color="white" className="text-xl leading-relaxed !font-bold">
                {service.title}
              </Heading>
              <Text color="white" className="text-sm leading-relaxed opacity-90">
                {service.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
