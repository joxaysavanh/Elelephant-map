import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-600 p-2 rounded-lg">
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
                <h3 className="text-2xl font-bold">Vientiane Heritage</h3>
                <p className="text-gray-400">Discover Laos Cultural Treasures</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Explore the magnificent heritage sites of Vientiane, where ancient Buddhist traditions 
              continue to thrive in the heart of Laos. Discover sacred temples, golden stupas, 
              and the living culture that defines this remarkable capital city.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#heritage" className="text-gray-300 hover:text-green-400 transition-colors">Heritage Sites</a></li>
              <li><a href="#culture" className="text-gray-300 hover:text-green-400 transition-colors">Culture</a></li>
              <li><a href="#visit" className="text-gray-300 hover:text-green-400 transition-colors">Plan Your Visit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Vientiane, Laos</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">info@vientianeheritage.la</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+856 21 123 456</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Vientiane Heritage. All rights reserved. | Preserving Lao culture for future generations.
          </p>
        </div>
      </div>
    </footer>
  );
}