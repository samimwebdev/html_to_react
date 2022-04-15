import { useState } from 'react'
import Layout from './components/layout/Layout'
import ScrollBottom from './components/ScrollBottom'
import About from './sections/About'
import Contact from './sections/Contact'
import FeaturedTeam from './sections/FeaturedTeam'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Promo from './sections/Promo'
import Services from './sections/Services'
import Teams from './sections/Teams'
import GlobalStyles from './styles/GlobalStyle'

function App() {
  return (
    <Layout>
      <GlobalStyles />
      <Home />
      <About />
      <Promo />
      <Services />
      <Teams />
      <Projects />
      <Contact />
      <FeaturedTeam />
      <ScrollBottom />
    </Layout>
  )
}

export default App
