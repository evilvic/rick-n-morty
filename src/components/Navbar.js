import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from '../style/components'

const Navbar = () => {
    return (
        <Nav>
            <NavLink to='/'>
                <img
                    src='https://res.cloudinary.com/evilvic/image/upload/v1587179856/rick-n-morty/rnm-logo.png' 
                    alt='Rick and Morty logo'
                />
            </NavLink>
            <section>
                <NavLink to='/characters'>CHARACTERS</NavLink>
                <NavLink to='/episodes'>EPISODES</NavLink>
                <NavLink to='/register'>REGISTER</NavLink>
            </section>
        </Nav>
    )
}

export default Navbar
