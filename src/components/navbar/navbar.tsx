import React from 'react'
import { Link } from "gatsby"
import logo from '../../images/logo.jpg';

type NavBarProps = {
  openMenuClicked: () => void
}

const NavBar = ({ openMenuClicked }: NavBarProps) => {
  return (
    <div className="c-header__navbar c-navbar">
      {/* <h1 className='c-navbar__title'>
        Roots in the Woods
      </h1> */}
      <Link to='/' className="c-logo c-navbar__logo">
        <img width="64px" height="64px" src={logo} alt="roots in the woods logo" />
      </Link>
      <button className="c-navbar__menu-toggle" onClick={() => openMenuClicked()}><i className="bi bi-list"></i></button>
      <nav className='c-navbar__menu'>
        <ul className='c-navbar__menu-list'>
          <li className='c-navbar__menu-list-item'><Link activeClassName='c-link--active' className='c-link' to="/">Home</Link></li>
          <li className='c-navbar__menu-list-item'><a className='c-link' href="https://fienta.com/roots-in-the-woods-2023">Tickets</a></li>
          <li className='c-navbar__menu-list-item'><Link activeClassName='c-link--active' className='c-link' to="/events">Events</Link></li>
          <li className='c-navbar__menu-list-item'><Link activeClassName='c-link--active' className='c-link' to="/news">News</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar