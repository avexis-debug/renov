
import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1920" 
            alt="Showcase Video" 
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gold/10 group-hover:bg-gold/0 transition-colors duration-500" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-red-600 rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
              <Play fill="white" className="text-white ml-1" size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
