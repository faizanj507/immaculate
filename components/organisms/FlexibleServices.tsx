import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

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
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0F4C81] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <Heading level={2} color="white" className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Flexible Residential <span className="text-primary italic">Cleaning Services</span> Built Around Your Life
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col gap-4 sm:gap-6 p-6 sm:p-8 md:p-10 bg-white/5 border-primary rounded-lg relative">
              <div className="absolute top-2 left-[2.5%] w-[95%] h-1 bg-primary rounded-full"></div>
              <Heading level={4} color="white" className="text-lg sm:text-xl leading-relaxed !font-bold">
                {service.title}
              </Heading>
              <Text color="white" className="text-sm leading-relaxed opacity-90">
                {service.description}
              </Text>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a href="tel:4105490727" className="w-full sm:w-auto">
            <Button variant="white" className="w-full sm:w-auto !px-8 sm:!px-12 !py-4 sm:!py-5 shadow-xl">Call Now</Button>
          </a>
          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto !px-8 sm:!px-12 !py-4 sm:!py-5 shadow-xl">Request a Quote</Button>
          </a>
        </div>
      </div>
    </section>
  );
};
