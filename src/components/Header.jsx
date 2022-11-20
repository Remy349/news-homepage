import React, { useState } from 'react'
import { HeaderLink } from './HeaderLink'

export const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='header'>
      <nav className='nav container'>
        <a className='nav__logo' href='#'>
          <img src={props.logo} className='nav__logo-img' alt='Logo' />
        </a>
        <div className={showMenu ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list'>
            <HeaderLink link='Home' />
            <HeaderLink link='New' />
            <HeaderLink link='Popular' />
            <HeaderLink link='Trending' />
            <HeaderLink link='Categories' />
          </ul>
          <img
            className='nav__close'
            src={props.iconMenuClose}
            alt='Icon menu close'
            onClick={() => setShowMenu(false)}
          />
        </div>
        <div className='nav__toggle' onClick={() => setShowMenu(true)}>
          <img
            className='nav__toggle-icon'
            src={props.iconMenu}
            alt='Icon menu'
          />
        </div>
      </nav>
    </header>
  )
}
