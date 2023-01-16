import React, { useState } from 'react'
import NavBar from '../navbar/navbar'
import headerImage from '../../images/roots-banner-2023.jpg'
import SideBar from '../sidebar'
import { useEffect } from 'react'

type HeaderProps = {
    setDisableScroll: (disabled: boolean) => void
}

const Header = ({ setDisableScroll }: HeaderProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        setDisableScroll(sidebarOpen)
    }, [sidebarOpen])

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