import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';

interface HeritageSite {
  id: string;
  name: string;
  image: string;
  description: string;
  period: string;
  significance: string;
}

interface HeritageSitesProps {
  onSiteClick: (siteId: string) => void;
}

const sites: HeritageSite[] = [
  {
    id: 'that-luang',
    name: 'That Luang Stupa',
    image: 'https://discoverlaos.today/img/event/9459084eaf9debef0e48f2f4791e752c.jpg?p=original',
    description: 'The Great Sacred Stupa - National monument and symbol of Lao identity',
    period: '3rd century CE - 16th century',
    significance: 'Houses a relic of the Buddha and represents Lao Buddhist heritage'
  },
  {
    id: 'wat-sisaket',
    name: 'Wat Si Saket',
    image: 'https://vientiane.crowneplaza.com/uploads/blog/wat_sisaket/Body.jpg ',
    description: 'Oldest surviving temple in Vientiane with thousands of Buddha statues',
    period: '1818',
    significance: 'Built by King Anouvong, survived the Siamese invasion of 1827'
  },
  {
    id: 'wat-si-muang',
    name: 'Wat Si Muang',
    image: 'https://www.vietnamitasenmadrid.com/files/-hv0xiyqpxj8/u0-0wkpmpfi/aaaaaaaalpm/-hh2p9j4914/s1600/templos-wat-si-muang.jpg',
    description: 'Guardian spirit temple and spiritual center of Vientiane',
    period: '1563',
    significance: 'City pillar temple believed to grant wishes and offer protection'
  }
];

export default function HeritageSites({ onSiteClick }: HeritageSitesProps) {
  return (
    <section id="heritage" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sacred Heritage Sites
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the magnificent temples and stupas that have stood as guardians of Lao culture for centuries
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sites.map((site) => (
            <div 
              key={site.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => onSiteClick(site.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={site.image} 
                  alt={site.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-green-900 px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span className="text-sm font-semibold">Heritage</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{site.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{site.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2 text-green-600" />
                    <span>{site.period}</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>{site.significance}</span>
                  </div>
                </div>
                
                <button className="mt-4 w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300">
                  Explore Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}