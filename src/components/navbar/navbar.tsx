import React from 'react'

import logo from '../../images/logo.jpg';

type NavBarProps = {
  openMenuClicked: () => void
}

const NavBar = ({openMenuClicked}: NavBarProps) => {
  return (
    <div className="c-header__navbar c-navbar">
      {/* <h1 className='c-navbar__title'>
        Roots in the Woods
      </h1> */}
      <div className="c-logo c-navbar__logo">
        <img width="64px" height="64px" src={logo} alt="roots in the woods logo" />
      </div>
      <button className="c-navbar__menu-toggle" onClick={() => openMenuClicked()}><i className="bi bi-list"></i></button>
      <nav className='c-navbar__menu'>
        <ul className='c-navbar__menu-list'>
          <li className='c-navbar__menu-list-item'><a href="/">Home</a></li>
          <li className='c-navbar__menu-list-item'><a href="https://fienta.com/roots-in-the-woods-2023">Tickets</a></li>
          <li className='c-navbar__menu-list-item'><a href="/events">Events</a></li>
          <li className='c-navbar__menu-list-item'><a href="/news">News</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar