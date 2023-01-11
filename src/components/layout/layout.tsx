import React from 'react'
import Header from '../header/header'

import '../../css/main.scss'

type Props = {
    children: React.ReactElement
}

const Layout = ({ children }: Props) => {
    return (
        <main className='c-page'>
            <Header />
            {children}
        </main>
    )
}

export default Layout