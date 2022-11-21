import React from 'react'
import { Header } from './components/Header'
import { SectionTop } from './components/SectionTop'
import { SectionBottom } from './components/SectionBottom'

import logo from './assets/images/logo.svg'
import iconMenu from './assets/images/icon-menu.svg'
import iconMenuClose from './assets/images/icon-menu-close.svg'

import imageMobile from './assets/images/image-web-3-mobile.jpg'

import imageRetroPcs from './assets/images/image-retro-pcs.jpg'
import imageTopLaptops from './assets/images/image-top-laptops.jpg'
import imageGamingGrowth from './assets/images/image-gaming-growth.jpg'

function App() {
  return (
    <>
      <Header logo={logo} iconMenuClose={iconMenuClose} iconMenu={iconMenu} />
      <main className='main container'>
        <SectionTop imageMobile={imageMobile} />
        <SectionBottom
          imageRetroPcs={imageRetroPcs}
          imageTopLaptops={imageTopLaptops}
          imageGamingGrowth={imageGamingGrowth}
        />
      </main>
    </>
  )
}

export default App
