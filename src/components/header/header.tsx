import React from 'react'
import NavBar from '../navbar'
import './header.scss'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='c-header'>
            <h1>
                Roots in the Woods
            </h1>
            <NavBar />
        </header>
    )
}

export default Header