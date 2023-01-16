import React from 'react'
import { Link } from "gatsby"

type SideBarProps = {
  isOpen: boolean
  closeMenuClicked: VoidFunction
}

const SideBar = ({ isOpen, closeMenuClicked }: SideBarProps) => {


  return (
    <div className={`c-sidebar ${isOpen ? 'c-sidebar--show' : ''}`}>
      <header className='c-sidebar__header'>
        <button className="c-sidebar__btn-close" onClick={() => closeMenuClicked()}>
          <i className="bi bi-x-lg"></i>
        </button>
      </header>

      <nav className='c-sidebar__menu'>
        <ul className='c-sidebar__menu-list'>
          <li className='c-sidebar__menu-list-item'><Link to="/">Home</Link></li>
          <li className='c-sidebar__menu-list-item'><Link to="https://fienta.com/roots-in-the-woods-2023">Tickets</Link></li>
          <li className='c-sidebar__menu-list-item'><Link to="/events">Events</Link></li>
          <li className='c-sidebar__menu-list-item'><Link to="/news">News</Link></li>
        </ul>
      </nav>

    </div>
  )
}

export default SideBar