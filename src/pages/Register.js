import React from 'react'
import { MyContext } from '../Context'
import { StyledForm, StyledProfile } from '../style/components'

const Register = () => (
    <MyContext.Consumer>
        {context => (
            <section className="container" id="register-bg">
                {!context.state.isLoggedIn ? 
                <StyledForm onSubmit={context.handleRegisterSubmit}>
                    <h2>Register</h2>
                    {context.state.error ? 
                    <p>Password must be at least 8 characters.</p>
                    :
                    <p>Show me what you got!</p>
                    }
                    <label>USERNAME</label>
                    <input 
                        placeholder='evilvic'
                        name='username'
                        type='text'
                        value={context.state.registerForm.username}
                        onChange={context.handleRegisterInput}
                        required
                    />
                    <label>EMAIL</label>
                    <input 
                        placeholder='vic.pero@icloud.com'
                        name='email'
                        type='email'
                        value={context.state.registerForm.email}
                        onChange={context.handleRegisterInput}
                        required
                    />
                    <label>PASSWORD</label>
                    <input 
                        placeholder='●●●●●●●'
                        name='password'
                        type='password'
                        value={context.state.registerForm.password}
                        onChange={context.handleRegisterInput}
                        required
                    />
                    <button>SEND</button>
                </StyledForm>
                : 
                <StyledProfile>
                    <h2>Profile</h2>
                    <p>Get Schwifty!</p>
                    <img
                        src='https://res.cloudinary.com/evilvic/image/upload/v1587255517/rick-n-morty/rnm-profile.jpg'
                        alt='Profile Meeseek'
                    />
                    <h3>{context.state.loggedUser.username}</h3>
                    <p className='label'>USERNAME</p>
                    <h3>{context.state.loggedUser.email}</h3>
                    <p className='label'>EMAIL</p>
                    <button onClick={context.handleLogOut}>LOG OUT</button>
                </StyledProfile>
                }
            </section>
        )}
    </MyContext.Consumer>
)

export default Register
