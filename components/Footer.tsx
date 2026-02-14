
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Colonne 1 : Branding & Description SEO */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start">
              <div className="text-3xl font-bold tracking-tighter flex items-center gap-1">
                 <span className="text-gold">N</span>
                 <div className="w-1.5 h-10 bg-gold rotate-[20deg] mx-1"></div>
                 <span className="text-gray-800">A</span>
              </div>
              <span className="text-[10px] tracking-[0.4em] font-bold mt-2 text-gray-400">RÉNOVATION CHARLEROI</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Spécialiste de la rénovation de prestige dans le Hainaut. 
              Accompagnement de A à Z pour vos travaux de transformation, extension et design d'intérieur à Charleroi et environs.
            </p>
            <div className="flex gap-4">
              <Instagram size={18} className="text-gray-400 hover:text-gold cursor-pointer transition-colors" />
              <Facebook size={18} className="text-gray-400 hover:text-gold cursor-pointer transition-colors" />
              <Linkedin size={18} className="text-gray-400 hover:text-gold cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Colonne 2 : Menu Navigation */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-bold tracking-widest text-gray-800 uppercase serif">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-xs text-gray-500 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={12} className="text-gray-300 group-hover:text-gold" />
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#projects" className="text-xs text-gray-500 hover:text-gold transition-colors flex items-center gap-2 group">
                  <ChevronRight size={12} className="text-gray-300 group-hover:text-gold" />
                  NOS RÉALISATIONS
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Contacts & Infos */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-bold tracking-widest text-gray-800 uppercase serif">Contacts</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-800">Siège Social</span>
                  <span className="text-xs text-gray-500">Boulevard Joseph Tirou, 6000 Charleroi, Belgique</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-800">Email</span>
                  <span className="text-xs text-gray-500">contact@noia-renovation.be</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-800">Téléphone</span>
                  <span className="text-xs text-gray-500">+32 (0) 71 81 25 20</span>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 4 : Google Maps Chargement Rapide */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-bold tracking-widest text-gray-800 uppercase serif">Notre Zone</h3>
            <div className="w-full h-48 rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m3!1d40660.85237882103!2d4.402636611593979!3d50.41219662369792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c225e365020473%3A0xc6338b9758f1f544!2sCharleroi!5e0!3m2!1sfr!2sbe!4v1715854890000!5m2!1sfr!2sbe" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Charleroi Noia Rénovation"
              ></iframe>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] tracking-[0.2em] text-gray-400 uppercase font-medium">
            © 2025 NOÏA RÉNOVATION BELGIQUE - TOUS DROITS RÉSERVÉS
          </div>
          <div className="flex gap-6 text-[10px] tracking-[0.1em] text-gray-400 uppercase font-medium">
            <a href="#" className="hover:text-gold">Mentions Légales</a>
            <a href="#" className="hover:text-gold">Vie Privée</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
