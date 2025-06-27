import React from 'react';
import Hero from '../../Components/FrontEnd/Hero/Hero';
import BestPicks from '../../Components/FrontEnd/BestPicks/BestPicks';
import MagicSections from '../../Components/FrontEnd/MagicSections/MagicSections';

function HomePage() {
  return (
    <>
      <Hero />
      <BestPicks />
      <MagicSections />
    </>
  );
}

export default HomePage;