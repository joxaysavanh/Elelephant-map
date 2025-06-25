import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HeritageSites from './components/HeritageSites';
import SiteDetail from './components/SiteDetail';
import CultureSection from './components/CultureSection';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSite, setSelectedSite] = useState<string | null>(null);

  const handleExploreClick = () => {
    document.getElementById('heritage')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSiteClick = (siteId: string) => {
    setSelectedSite(siteId);
  };

  const handleCloseSiteDetail = () => {
    setSelectedSite(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        <HeroSection onExploreClick={handleExploreClick} />
        <HeritageSites onSiteClick={handleSiteClick} />
        <CultureSection />
      </main>
      
      <Footer />
      
      {selectedSite && (
        <SiteDetail 
          siteId={selectedSite} 
          onClose={handleCloseSiteDetail} 
        />
      )}
    </div>
  );
}

export default App;