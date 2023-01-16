import React, { useState } from 'react'
import NavBar from '../navbar/navbar'
import headerImage from '../../images/roots-banner-2023.jpg'
import SideBar from '../sidebar'

type Props = {}

const Header = (props: Props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <header className='c-header'>
                <img className='c-header__img' src={headerImage} alt="" />
                <NavBar openMenuClicked={() => setSidebarOpen(true)} />
            </header>
            <SideBar isOpen={sidebarOpen} closeMenuClicked={() => setSidebarOpen(false)} />
        </>
    )
}

export default Header