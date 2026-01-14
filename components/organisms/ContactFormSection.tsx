import React from 'react';
import Image from 'next/image';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { Select } from '../atoms/Select';
import { FormField } from '../molecules/FormField';

export const ContactFormSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
             <div className="relative w-full h-full min-h-[500px] rounded-2xl overflow-hidden group shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
                  alt="Immaculate Clean Home" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl">
                      <Heading level={4} color="white" className="mb-4 text-2xl font-black uppercase tracking-tight">Choose How You'd Like to Get Started</Heading>
                      <Text variant="small" color="white" className="opacity-80 leading-relaxed font-medium">
                        Fill out our simple form and we'll get back to you fast with a free estimate tailored to your home size, cleaning preferences, and schedule.
                      </Text>
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-7">
            <div className="max-w-xl mx-auto lg:ml-auto">
              <form className="space-y-8 bg-gray-50 p-10 rounded-2xl border border-gray-100">
                <div className="grid grid-cols-1 gap-8">
                   <FormField label="Name">
                     <Input placeholder="Your Name" className="!bg-white" />
                   </FormField>
                   <FormField label="Email">
                     <Input type="email" placeholder="name@email.com" className="!bg-white" />
                   </FormField>
                   <FormField label="Phone">
                     <Input type="tel" placeholder="(000) 000-0000" className="!bg-white" />
                   </FormField>
                   <FormField label="Service">
                     <Select 
                       className="!bg-white"
                       options={[
                         { label: 'Select a Service', value: '' },
                         { label: 'Recurring Cleaning', value: 'recurring' },
                         { label: 'Deep Cleaning', value: 'deep' },
                         { label: 'Move In/Out', value: 'move' },
                       ]} 
                     />
                   </FormField>
                </div>
                <Button variant="primary" fullWidth className="!py-6 !text-base shadow-lg shadow-primary/20">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
