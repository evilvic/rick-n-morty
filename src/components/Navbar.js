import React from 'react'
import { NavLink } from 'react-router-dom'
import { MyContext } from '../Context'
import { StyledNav } from '../style/components'

const Navbar = () => (
    <MyContext.Consumer>
        {context => (
            <StyledNav>
                <NavLink to='/'>
                    <img
                        src='https://res.cloudinary.com/evilvic/image/upload/v1587179856/rick-n-morty/rnm-logo.png' 
                        alt='Rick and Morty logo'
                    />
                </NavLink>
                <section>
                    <NavLink to='/characters'>CHARACTERS</NavLink>
                    <NavLink to='/episodes'>EPISODES</NavLink>
                    {!context.state.isLoggedIn ? 
                    <NavLink to='/register'>REGISTER</NavLink>
                    :
                    <NavLink to='/register'>PROFILE</NavLink>
                    }
                </section>
            </StyledNav>
        )}
    </MyContext.Consumer>
)

export default Navbar
