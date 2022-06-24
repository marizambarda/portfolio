import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

//components
import Menu from './components/Menu/index.js'

//pages
import HomePage from './pages/HomePage/index.js'
import AboutPage from './pages/AboutPage/index.js'
import ProjectsPage from './pages/ProjectsPage/index.js'
import ContactPage from './pages/ContactPage/index.js'

function App () {
  return (
    <div className='section-content'>
      <Menu />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  )
}

export default App
