
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Darker Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in">
        <h1 className="text-white text-5xl md:text-8xl font-bold mb-6 tracking-widest leading-tight">
          NOÏA RÉNOVATION
        </h1>
        <p className="text-white text-sm md:text-base mb-12 tracking-wider max-w-2xl mx-auto opacity-90 leading-relaxed uppercase">
          Transformez vos espaces avec l'excellence de la rénovation !<br/>
          De l'inspiration à la transformation, nous réinventons vos espaces avec passion et précision.
        </p>
        
        <button className="bg-gold/80 backdrop-blur-sm text-white px-10 py-4 font-bold tracking-[0.2em] text-xs hover:bg-gold transition-all uppercase rounded shadow-lg">
          EN SAVOIR PLUS
        </button>
      </div>
    </section>
  );
};

export default Hero;
