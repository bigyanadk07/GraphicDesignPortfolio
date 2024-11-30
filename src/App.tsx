import React from 'react'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import { LogofolioPage } from './pages/Logofolio'
import { PostfolioPage } from './pages/Postfolio'
import ProductDesignPage from './pages/ProductPage'
import Footer from './components/ui/Footer'

const App:React.FC = () => {
  return (
    <div>
      <Home/>
      <AboutPage/>
      <LogofolioPage/>
      <PostfolioPage/>
      <ProductDesignPage/>
      <Footer/>
    </div>
  )
}

export default App
