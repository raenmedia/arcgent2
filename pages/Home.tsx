import React from 'react';
import Hero from '../components/Hero';
import PainSection from '../components/PainSection';
import HowItWorks from '../components/HowItWorks';
import FeatureHighlights from '../components/FeatureHighlights';
import KeyBenefits from '../components/KeyBenefits';
import UseCases from '../components/UseCases';
import ReverseEngineering from '../components/ReverseEngineering';
import FutureVision from '../components/FutureVision';
import SocialProof from '../components/SocialProof';
import FinalCTA from '../components/FinalCTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <PainSection />
      <HowItWorks />
      <FeatureHighlights />
      <KeyBenefits />
      <UseCases />
      <ReverseEngineering />
      <FutureVision />
      <SocialProof />
      <FinalCTA />
    </>
  );
};

export default Home;
