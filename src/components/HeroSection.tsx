import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section className="relative h-screen bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover
            <span className="block text-yellow-300">Vientiane's</span>
            Sacred Heritage
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-2xl mx-auto leading-relaxed">
            Journey through centuries of Buddhist culture and explore the magnificent temples and stupas that define Laos' spiritual heart
          </p>
          
          <button 
            onClick={onExploreClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-green-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Heritage Sites
          </button>
          
          <div className="mt-12 animate-bounce">
            <ArrowDown className="h-8 w-8 mx-auto text-yellow-300" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}