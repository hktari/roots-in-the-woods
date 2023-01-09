import React from 'react'
import NavBar from './navbar'

type Props = {}

const Header = (props: Props) => {
    return (
        <header>
            <h1>
                Roots in the Woods
            </h1>
            <NavBar />
        </header>
    )
}

export default Header