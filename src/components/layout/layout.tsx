import React from 'react'
import Header from '../header/header'

import '../../css/main.scss'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <main className='c-page'>
            <Header />
            <div className="container-md">
                {children}
            </div>
        </main>
    )
}

export default Layout