import React from 'react'
import Header from '../Components/FrontEnd/Header/Header'
import Hero from '../Components/FrontEnd/Hero/Hero'
import BestPicks from '../Components/FrontEnd/BestPicks/BestPicks'
import MagicSections from '../Components/FrontEnd/MagicSections/MagicSections'
import Footer from '../Components/FrontEnd/Footer/Footer'
import { Outlet } from 'react-router'


function FrontendLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default FrontendLayout;