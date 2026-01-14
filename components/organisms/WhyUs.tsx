import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export const WhyUs: React.FC = () => {
  const benefits = [
    {
      description: "Professionally trained, background-checked and fully bonded staff - not gig workers.",
    },
    {
      description: "Commercial-grade vacuums, HEPA filters and hospital-grade, EPA-registered disinfecting products - for a truly clean, healthy home.",
    },
    {
      description: "Consistency: many of our clients have trusted us for 10, 15, even 20+ years.",
    },
    {
      description: "Insurance coverage and full liability protection - so you never worry this risk.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl">
        <Heading level={2} className="mb-6">
          Why More <span className="text-primary">Maryland Families</span> Choose Us for Home <span className="text-primary">Cleaning Services</span>
        </Heading>
        
        <div className="max-w-4xl mx-auto mb-16">
          <Text variant="body" className="mb-6">
            We know you have many options when it comes to hiring a home cleaning company — that's why we go above and beyond with every clean. Since 2004, we've built a reputation for reliable, high-quality, and honest service for households across Eldersburg, Ellicott City, Owings Mills, Westminster, Sykesville, and surrounding Central Maryland communities.
          </Text>
          <Text variant="large" weight="bold">
            With Immaculate Clean, you'll enjoy:
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 border border-gray-100 flex flex-col h-full">
              <Text weight="bold" className="text-secondary text-4xl font-serif mb-4">“</Text>
              <Text variant="small" color="gray" className="leading-relaxed">
                {benefit.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
