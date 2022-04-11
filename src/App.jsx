import { useState } from 'react'
import Layout from './components/layout/Layout'
import About from './sections/About'
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
    </Layout>
  )
}

export default App
