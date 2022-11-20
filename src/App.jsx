import React from 'react'
import { Header } from './components/Header'

import logo from './assets/images/logo.svg'
import iconMenu from './assets/images/icon-menu.svg'
import iconMenuClose from './assets/images/icon-menu-close.svg'

function App() {
  return (
    <>
      <Header logo={logo} iconMenuClose={iconMenuClose} iconMenu={iconMenu} />
      <main className='main'></main>
    </>
  )
}

export default App
