import React from 'react'
import { Link } from "gatsby"
import logo from '../../images/logo.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

type NavBarProps = {
  openMenuClicked: () => void
}

const NavBar = ({ openMenuClicked }: NavBarProps) => {

  const [stickToTop, setStickToTop] = useState(false)
  const lastScrollY = useRef(0)

  const onWindowScrollHandler = () => {
    const scrollDiff = window.scrollY - lastScrollY.current
    const navbarHeight = 96;

    // stick to top when navbar is scrolled out of sight and when scrolling up
    setStickToTop(window.scrollY > navbarHeight && scrollDiff < 0)
    
    lastScrollY.current = window.scrollY;
  }

  useEffect(() => {
    window.addEventListener('scroll', onWindowScrollHandler, { passive: true })
    return () => {
      window.removeEventListener('scroll', onWindowScrollHandler)
    }
  }, [openMenuClicked])

  return (
    <div className={`c-navbar ${stickToTop ? 'c-navbar--sticky' : ''}`}>
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