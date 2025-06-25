import React from 'react';
import { X, MapPin, Calendar, Users, Clock } from 'lucide-react';

interface SiteDetailProps {
  siteId: string;
  onClose: () => void;
}

const siteDetails = {
  'that-luang': {
    name: 'That Luang Stupa (Pha That Luang)',
    subtitle: 'The Great Sacred Stupa',
    image: 'https://discoverlaos.today/img/event/9459084eaf9debef0e48f2f4791e752c.jpg?p=original',
    location: 'Vientiane, Laos (Capital City)',
    coordinates: '17.9757° N, 102.6331° E',
    height: '45 meters',
    status: 'National monument of Laos',
    history: [
      {
        period: '3rd century CE',
        event: 'According to legend, the original stupa was built by Indian missionaries sent by Emperor Ashoka to enshrine a breastbone of the Buddha.'
      },
      {
        period: '16th century (1566)',
        event: 'King Setthathirath built the current grand stupa on top of the ancient remains when he moved the capital to Vientiane.'
      },
      {
        period: '1828',
        event: 'That Luang was heavily damaged by Siamese invaders.'
      },
      {
        period: '1900s',
        event: 'The French colonial government reconstructed it based on historical sketches and architecture.'
      }
    ],
    architecture: {
      style: 'Lao Buddhist architecture with Theravada influence',
      structure: [
        'Main stupa is 45 meters high',
        'Surrounded by 30 smaller stupas',
        'Covered in gold leaf (symbolizing purity, enlightenment, and sovereignty)',
        'Represents a lotus bud, a sacred symbol in Buddhism'
      ]
    },
    significance: [
      'Believed to house a relic of the Buddha (his breastbone)',
      'Major site for Boun That Luang – a national Buddhist festival held in November',
      'Place of pilgrimage for Buddhists from across Laos and Southeast Asia',
      'Featured on Lao national emblem, currency, and government seals'
    ],
    festival: {
      name: 'Boun That Luang Festival',
      time: 'Held during Lao lunar calendar\'s full moon in November',
      activities: [
        'Almsgiving to monks',
        'Candlelight processions',
        'Traditional Lao music, dance, and parades',
        'Symbolizes unity of religion, culture, and nationhood'
      ]
    }
  },
  'wat-sisaket': {
    name: 'Wat Si Saket (ວັດສີສະເກດ)',
    subtitle: 'The Oldest Surviving Temple',
    image: 'https://vientiane.crowneplaza.com/uploads/blog/wat_sisaket/Body.jpg',
    location: 'Vientiane, Laos (near the Presidential Palace)',
    coordinates: '17.9639° N, 102.6133° E',
    height: 'Traditional single-story structure',
    status: 'Historical monument and active monastery',
    history: [
      {
        period: '1818',
        event: 'Built by King Anouvong (Chao Anouvong) during his reign.'
      },
      {
        period: '1827',
        event: 'One of the few temples that survived the Siamese invasion, possibly due to its Thai-style architecture.'
      },
      {
        period: '19th-20th century',
        event: 'Served as a library and repository for ancient Buddhist manuscripts.'
      }
    ],
    architecture: {
      style: 'Traditional Siamese (Thai-style) architecture',
      structure: [
        'Sim (ordination hall) surrounded by a terrace with elegant pillars',
        'More than 6,800 Buddha statues in cloister walls',
        'Beautiful but faded mural paintings inside the main hall',
        'Unique layout with covered galleries around the main building'
      ]
    },
    significance: [
      'Oldest surviving temple in Vientiane',
      'Symbol of Laos-Siamese historical connection',
      'Repository of thousands of Buddha statues and ancient manuscripts',
      'Popular pilgrimage and tourist site for its spiritual atmosphere'
    ],
    festival: {
      name: 'Buddhist Ceremonies',
      time: 'Regular Buddhist festivals and daily prayers',
      activities: [
        'Daily almsgiving ceremonies',
        'Meditation sessions',
        'Buddhist scripture study',
        'Traditional blessing ceremonies'
      ]
    }
  },
  'wat-si-muang': {
    name: 'Wat Si Muang (ວັດສີເມືອງ)',
    subtitle: 'Guardian Spirit Temple',
    image: 'https://www.vietnamitasenmadrid.com/files/-hv0xiyqpxj8/u0-0wkpmpfi/aaaaaaaalpm/-hh2p9j4914/s1600/templos-wat-si-muang.jpg',
    location: 'Vientiane, Laos (east of the city center)',
    coordinates: '17.9648° N, 102.6089° E',
    height: 'Traditional temple structure',
    status: 'City pillar temple and active spiritual center',
    history: [
      {
        period: '1563',
        event: 'Originally built when Vientiane became the capital of the Lan Xang kingdom.'
      },
      {
        period: 'Legend',
        event: 'According to legend, a woman named Nang Si sacrificed herself during construction to bless the land and become the guardian spirit.'
      },
      {
        period: 'Various periods',
        event: 'Restored and renovated multiple times throughout history.'
      }
    ],
    architecture: {
      style: 'Traditional Lao Buddhist architecture with ornate decorations',
      structure: [
        'Colorful facade with intricate golden decorations',
        'Red and gold color scheme representing prosperity and spirituality',
        'Traditional Lao roof design with multiple tiers',
        'Sacred pillar (Lak Mueang) housing the city guardian spirit'
      ]
    },
    significance: [
      'Guardian spirit (Si Muang) temple of Vientiane',
      'Believed to grant wishes and offer protection to devotees',
      'One of the most spiritually important temples in Laos',
      'Strongly connected to Vientiane\'s cultural identity and traditions'
    ],
    festival: {
      name: 'Guardian Spirit Ceremonies',
      time: 'Regular rituals and special occasions',
      activities: [
        'Wish-making ceremonies',
        'Fertility and prosperity prayers',
        'Traditional Lao blessing rituals',
        'Community spiritual gatherings'
      ]
    }
  }
};

export default function SiteDetail({ siteId, onClose }: SiteDetailProps) {
  const site = siteDetails[siteId as keyof typeof siteDetails];
  
  if (!site) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={site.image} 
            alt={site.name}
            className="w-full h-80 object-cover rounded-t-2xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
            <h1 className="text-4xl font-bold text-white mb-2">{site.name}</h1>
            <p className="text-xl text-yellow-300">{site.subtitle}</p>
          </div>
        </div>
        
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">{site.location}</p>
                  <p className="text-sm text-gray-500">{site.coordinates}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-semibold">Status</p>
                  <p className="text-gray-600">{site.status}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-4">Quick Facts</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Height: {site.height}</li>
                <li>• Symbol of Lao identity and Buddhism</li>
                <li>• Important cultural heritage site</li>
                <li>• Active place of worship and pilgrimage</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Calendar className="h-6 w-6 text-green-600 mr-3" />
              Historical Timeline
            </h2>
            <div className="space-y-6">
              {site.history.map((item, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold min-w-fit">
                    {item.period}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Architecture & Design</h3>
              <p className="text-gray-600 mb-4">{site.architecture.style}</p>
              <ul className="space-y-2">
                {site.architecture.structure.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Religious & Cultural Significance</h3>
              <ul className="space-y-2">
                {site.significance.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">{site.festival.name}</h3>
            <p className="text-green-700 mb-4">{site.festival.time}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {site.festival.activities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-green-600">✦</span>
                  <span className="text-green-700">{activity}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800 text-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <MapPin className="h-6 w-6 text-yellow-400 mr-3" />
              Interactive Map Location
            </h3>
            <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <p className="text-gray-300">Interactive map showing exact location</p>
                <p className="text-sm text-gray-400 mt-2">{site.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}