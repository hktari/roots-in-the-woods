import React from 'react'
import Header from '../header/header'

import '../../css/main.scss'
import Footer from '../footer'
import { useState } from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {

    const [disableScroll, setDisableScroll] = useState(false)

    return (
        <main className={`c-page ${disableScroll ? 'c-page--no-scroll' : ''}`}>
            <Header setDisableScroll={setDisableScroll}/>
            <div className="container-md">
                {children}
            </div>

            <Footer />
        </main>
    )
}

export default Layout
