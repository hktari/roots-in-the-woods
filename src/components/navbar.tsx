import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/tickets">Tickets</a></li>
            <li><a href="/news">News</a></li>
        </ul>
    </nav>
  )
}

export default NavBar