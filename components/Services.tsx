
import React from 'react';
import { Armchair, Sprout, Lamp } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, any> = {
  Armchair: Armchair,
  Sprout: Sprout,
  Lamp: Lamp,
};

const Services: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-4 block">NOÏA RÉNOVATION</span>
        <h2 className="text-4xl font-bold text-gray-800 mb-20 uppercase tracking-widest serif">NOS MÉTIERS</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="flex flex-col items-center gap-6 group">
                <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110">
                  <IconComponent size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold tracking-widest text-gray-800 uppercase serif">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
