import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'
import Swal from 'sweetalert2'

export const MyContext = createContext()

class MyProvider extends Component {

    state = {
        registerForm: {
            username: '',
            email: '',
            password: ''
        },
        isLoggedIn: false,
        loggedUser: {
            username: '',
            email: '',
            password: ''
        }
    }

    handleRegisterInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
            ...prevState,
            registerForm: {
                ...prevState.registerForm,
                [name]: value
            }
        }))
    }

    handleRegisterSubmit = e => {
        e.preventDefault()
        // validación de password
        const { username, email, password } = this.state.registerForm
        this.setState(prevState => ({
            ...prevState,
            registerForm: {
                username: '',
                email: '',
                password: ''
            },
            isLoggedIn: true,
            loggedUser: {
                username: username,
                email: email,
                password: password
            }
        }))
        
        Swal.fire(
            'Hey @' + username + '!',
            'Your registration was successful.',
            'success'
        )
          
    }

    render() {

        const {
            state,
            handleRegisterInput,
            handleRegisterSubmit
        } = this

        return (
            <MyContext.Provider
                value={{
                    state,
                    handleRegisterInput,
                    handleRegisterSubmit
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default withRouter(MyProvider)