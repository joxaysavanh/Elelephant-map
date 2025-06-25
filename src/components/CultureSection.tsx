import React from 'react';
import { Heart, Users, Calendar, Sparkles } from 'lucide-react';

export default function CultureSection() {
  const culturalAspects = [
    {
      icon: Heart,
      title: 'Buddhist Heritage',
      description: 'Deep-rooted Theravada Buddhist traditions that shape daily life and spiritual practices'
    },
    {
      icon: Users,
      title: 'Community Spirit',
      description: 'Strong sense of community centered around temple activities and religious festivals'
    },
    {
      icon: Calendar,
      title: 'Sacred Festivals',
      description: 'Annual celebrations like Boun That Luang that unite the nation in spiritual devotion'
    },
    {
      icon: Sparkles,
      title: 'Artistic Legacy',
      description: 'Exquisite craftsmanship in temple architecture, gold leaf work, and traditional arts'
    }
  ];

  return (
    <section id="culture" className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Living Culture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the vibrant traditions that continue to thrive in modern Vientiane, 
            where ancient wisdom meets contemporary life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {culturalAspects.map((aspect, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <aspect.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{aspect.title}</h3>
              <p className="text-gray-600 leading-relaxed">{aspect.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://www.asiakingtravel.com/cuploads/files/intro%20trang%20phuc%20lao.jpg"
                alt="Lao cultural ceremony"
                className="w-full h-80 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Preserving Sacred Traditions
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  For over 1,400 years, the people of Vientiane have maintained their sacred traditions, 
                  passing down ancient rituals, architectural techniques, and spiritual practices from 
                  generation to generation. These living traditions continue to define the cultural 
                  identity of Laos today.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span className="text-gray-700">Daily almsgiving ceremonies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span className="text-gray-700">Traditional craft preservation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span className="text-gray-700">Meditation and mindfulness practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}