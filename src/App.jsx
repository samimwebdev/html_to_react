import { useState, useEffect } from 'react'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/ScrollToTop'
import About from './sections/About'
import Contact from './sections/Contact'
import FeaturedTeam from './sections/FeaturedTeam'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Promo from './sections/Promo'
import Services from './sections/Services'
import Teams from './sections/Teams'

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Promo />
      <Services />
      <Teams />
      <Projects />
      <FeaturedTeam />
      <Contact />
      <ScrollToTop />
    </Layout>
  )
}

export default App
