import React from 'react'
import NavBar from '../navbar/navbar'
import headerImage from '../../images/roots-banner-2023.jpg'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='c-header'>
            <img className='c-header__img' src={headerImage} alt="" />
            <NavBar />
        </header>
    )
}

export default Header