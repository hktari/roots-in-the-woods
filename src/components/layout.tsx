import React from 'react'
import Header from './header'

type Props = {
    children: React.ReactElement
}

const Layout = ({ children }: Props) => {
    return (
        <main>
            <Header />
            {children}
        </main>
    )
}

export default Layout