
import React from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-white text-[11px] font-medium tracking-[0.2em]">
        {/* Left Side Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="mailto:contact@noia-renovation.be" className="hover:text-gold transition-colors">contact@noia-renovation.be</a>
          {NAV_LINKS.slice(0, 2).map((link) => (
            <a key={link.name} href={link.href} className="hover:text-gold transition-colors">{link.name}</a>
          ))}
        </div>

        {/* Logo Center */}
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold tracking-tighter flex items-center gap-1 group cursor-pointer">
             <span className="text-gold group-hover:scale-110 transition-transform">N</span>
             <div className="w-1.5 h-10 bg-gold rotate-[20deg] mx-1"></div>
             <span className="text-white group-hover:scale-110 transition-transform">A</span>
          </div>
        </div>

        {/* Right Side Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.slice(2).map((link) => (
            <a key={link.name} href={link.href} className="hover:text-gold transition-colors">{link.name}</a>
          ))}
          <a href="tel:003271812520" className="hover:text-gold transition-colors">+32 71 81 25 20</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
