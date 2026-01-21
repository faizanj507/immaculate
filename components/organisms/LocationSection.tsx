import React from 'react';

export const LocationSection: React.FC = () => {
  return (
    <section className="h-[300px] sm:h-[350px] md:h-[400px] bg-white">
      <a 
        href="https://www.google.com/maps/place/Immaculate+Clean+Inc./data=!4m2!3m1!1s0x0:0xb8749a6f1dae535c?sa=X&ved=1t:2428&ictx=111" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full h-full overflow-hidden"
      >
        <iframe
          src="https://www.google.com/maps?q=Immaculate+Clean+Inc.,+Eldersburg,+MD&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </a>
    </section>
  );
};

