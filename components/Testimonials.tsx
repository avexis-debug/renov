
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-2 mb-12">
          <div className="flex items-center gap-4">
            {/* Localized label */}
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">TÉMOIGNAGES</span>
            <div className="h-[1px] w-12 bg-gray-400"></div>
          </div>
          {/* Updated title to reflect the project brand (Noia Rénovation) and language */}
          <h2 className="text-4xl font-bold text-gray-800 text-center uppercase tracking-widest serif">
            ILS NOUS FONT CONFIANCE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white border border-gray-100 shadow-xl p-10 relative">
              {/* Decorative dots pattern */}
              <div className="absolute top-4 left-4 grid grid-cols-4 gap-1">
                {[...Array(16)].map((_, i) => <div key={i} className="w-1 h-1 bg-gray-200 rounded-full" />)}
              </div>
              <div className="absolute bottom-4 right-4 grid grid-cols-4 gap-1">
                {[...Array(16)].map((_, i) => <div key={i} className="w-1 h-1 bg-gray-200 rounded-full" />)}
              </div>

              <p className="text-gray-600 italic leading-relaxed mb-8 relative z-10">
                "{t.text}"
              </p>
              
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">- {t.name}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" className="text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2.5 h-2.5 bg-gray-800 rounded-full" />
          <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
          <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
          <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;