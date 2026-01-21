import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export const WhyUs: React.FC = () => {
  const benefits = [
    {
      title: "Professional Staff",
      description: "Professionally trained, background-checked and fully bonded staff - not gig workers.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Premium Equipment",
      description: "Commercial-grade vacuums, HEPA filters and hospital-grade, EPA-registered disinfecting products - for a truly clean, healthy home.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: "Proven Track Record",
      description: "Consistency: many of our clients have trusted us for 10, 15, even 20+ years.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Fully Insured",
      description: "Insurance coverage and full liability protection - so you never worry this risk.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Heading level={2} className="mb-6">
            Why More <span className="text-primary">Maryland Families</span> Choose Us for Home <span className="text-primary">Cleaning Services</span>
          </Heading>
          <Text variant="body" className="mb-6">
            We know you have many options when it comes to hiring a home cleaning company. That's why we go above and beyond with every clean. Since 2004, we've built a reputation for reliable, high-quality, and honest service for households across Eldersburg, Ellicott City, Owings Mills, Westminster, Sykesville, and surrounding Central Maryland communities.
          </Text>
          <Text variant="large" weight="bold">
            With Immaculate Clean, you'll enjoy:
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 border border-gray-100 rounded-lg group hover:bg-gray-50 transition-colors duration-300">
              <div className="flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <Heading level={4} className="mb-3 !font-bold">
                    {benefit.title}
                  </Heading>
                  <Text variant="body" color="gray" className="leading-relaxed">
                    {benefit.description}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="tel:4105490727">
            <Button variant="primary" className="!px-12 !py-5 shadow-lg">Call Now</Button>
          </a>
          <a href="#contact">
            <Button variant="secondary" className="!px-12 !py-5">Request a Quote</Button>
          </a>
        </div>
      </div>
    </section>
  );
};
