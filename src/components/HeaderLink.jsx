import React from 'react'

export const HeaderLink = (props) => {
  return (
    <li className='nav__item'>
      <a className='nav__link' href='#'>
        {props.link}
      </a>
    </li>
  )
}
