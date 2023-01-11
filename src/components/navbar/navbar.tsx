import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className="c-navbar">
      <h1 className='c-navbar__title'>
        Roots in the Woods
      </h1>
      <nav>
        <ul className='c-navbar__menu-list'>
          <li className='c-navbar__menu-list-item'><a href="/">Home</a></li>
          <li className='c-navbar__menu-list-item'><a href="https://fienta.com/roots-in-the-woods-2023">Tickets</a></li>
          <li className='c-navbar__menu-list-item'><a href="/news">News</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar