import React from 'react'
import { Link } from "gatsby"
import { useRef } from 'react'
import { useEffect } from 'react'
import SocialList from './social-list'

type SideBarProps = {
  isOpen: boolean
  closeMenuClicked: VoidFunction
}

const SideBar = ({ isOpen, closeMenuClicked }: SideBarProps) => {

  const menuListRef = useRef<HTMLElement>()

  useEffect(() => {

    if (!menuListRef.current) {
      return;
    }

    const links = menuListRef.current.querySelectorAll('.c-sidebar__menu-list-item > a')!

    const linkClickEventHandler = () => closeMenuClicked()

    links.forEach(link => {
      console.log('link', link.getAttribute('href'))

      // close menu when link is clicked
      link.addEventListener('click', linkClickEventHandler)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', linkClickEventHandler)
      })
    }
  }, [menuListRef])

  return (
    <div className={`c-sidebar ${isOpen ? 'c-sidebar--show' : ''}`}>
      <header className='c-sidebar__header'>
        <button className="c-sidebar__btn-close" onClick={() => closeMenuClicked()}>
          <i className="bi bi-x-lg"></i>
        </button>
      </header>

      <nav className='c-sidebar__menu'>
        <ul className='c-sidebar__menu-list' ref={menuListRef}>
          <li className='c-sidebar__menu-list-item'><Link className='c-link' activeClassName='c-link--active' to="/">Home</Link></li>
          <li className='c-sidebar__menu-list-item'><a className='c-link' href="https://fienta.com/roots-in-the-woods-2023">Tickets</a></li>
          <li className='c-sidebar__menu-list-item'><Link className='c-link' activeClassName='c-link--active' to="/events">Events</Link></li>
          <li className='c-sidebar__menu-list-item'><Link className='c-link' activeClassName='c-link--active' to="/news">News</Link></li>
        </ul>
      </nav>

      <div className="c-sidebar__social">
        <SocialList classModifiers={'c-social-list--black'} />
      </div>
    </div>
  )
}

export default SideBar