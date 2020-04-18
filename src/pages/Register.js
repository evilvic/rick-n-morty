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
                    <p>Show me what you got!</p>
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
                    
                </StyledProfile>
                }
            </section>
        )}
    </MyContext.Consumer>
)

export default Register
