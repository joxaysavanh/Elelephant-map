import React from 'react';
import { Menu, X } from 'lucide-react';



interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-green-700 to-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
               <img
                src="/logo.jpg" 
                alt="Elephant Map Logo"
                className="h-10 w-10 object-contain"
                onError={(e) => {
                  // Fallback to logo.jpg if image.png fails
                  e.currentTarget.src = "/images/logo.jpg";
                }}
                />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Vientiane Heritage</h1>
              <p className="text-green-100 text-sm">Discover Laos Cultural Treasures</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-green-200 transition-colors">Home</a>
            <a href="#heritage" className="hover:text-green-200 transition-colors">Heritage Sites</a>
            <a href="#culture" className="hover:text-green-200 transition-colors">Culture</a>
            <a href="#visit" className="hover:text-green-200 transition-colors">Visit</a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-green-500/30 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="hover:text-green-200 transition-colors">Home</a>
              <a href="#heritage" className="hover:text-green-200 transition-colors">Heritage Sites</a>
              <a href="#culture" className="hover:text-green-200 transition-colors">Culture</a>
              <a href="#visit" className="hover:text-green-200 transition-colors">Visit</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}