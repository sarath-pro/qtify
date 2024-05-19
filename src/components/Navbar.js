import React from 'react'
import './Navbar.css'
import Button from './Button'
import Logo from './Logo'
import Searchbar from './Searchbar'

function Navbar() {
    return (
        <>
            <nav>
                <Logo />
                <Searchbar />
                <Button text='Give Feedback'></Button>
            </nav>
        </>
    )
}

export default Navbar