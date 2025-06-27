import React from 'react'
import Header from '../Components/FrontEnd/Header/Header'
import Hero from '../Components/FrontEnd/Hero/Hero'
import BestPicks from '../Components/FrontEnd/BestPicks/BestPicks'
import MagicSections from '../Components/FrontEnd/MagicSections/MagicSections'

function FrontendLayout() {
  return (
    <div>
      <Header />
      <Hero />
      <BestPicks />
      <MagicSections />
    </div>
  )
}

export default FrontendLayout;