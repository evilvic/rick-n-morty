import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/characters'>CHARACTERS</NavLink>
            <NavLink to='/episodes'>EPISODES</NavLink>
            <NavLink to='/register'>REGISTER</NavLink>
        </nav>
    )
}

export default Navbar
