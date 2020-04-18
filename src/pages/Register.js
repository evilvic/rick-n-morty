import React from 'react'
import { StyledForm } from '../style/components'

const Register = () => {
    return (
        <section className="container" id="register-bg">
            <StyledForm>
                <h2>Register</h2>
                <p>Show me what you got!</p>
                <label>NAME</label>
                <input />
                <label>MAIL</label>
                <input />
                <label>PASSWORD</label>
                <input />
                <button>SEND</button>
            </StyledForm>
        </section>
    )
}

export default Register
