import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import HowItWorks from './components/HowItWorks';
import ReverseEngineering from './components/ReverseEngineering';
import KeyBenefits from './components/KeyBenefits';
import FeatureHighlights from './components/FeatureHighlights';
import UseCases from './components/UseCases';
import FutureVision from './components/FutureVision';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 overflow-x-hidden selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <HowItWorks />
        <ReverseEngineering />
        <KeyBenefits />
        <FeatureHighlights />
        <UseCases />
        <FutureVision />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;