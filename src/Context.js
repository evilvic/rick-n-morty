import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'
import API_SERVICE from './services/api'
import Swal from 'sweetalert2'

export const MyContext = createContext()

class MyProvider extends Component {

    state = {
        registerForm: {
            username: '',
            email: '',
            password: ''
        },
        error: false,
        isLoggedIn: false,
        loggedUser: {
            username: '',
            email: '',
            password: ''
        },
        characters: [],
        character: null,
        episodes: []
    }

    componentDidMount = async () => {
        const { data: characters } = await API_SERVICE.getCharacters()
        const { data: episodes } = await API_SERVICE.getEpisodes()
        this.setState(prevState => ({
            ...prevState,
            characters: characters,
            episodes: episodes
        }))
    }

    getCharacter = async id => {
        this.setState(prevState => ({
            ...prevState,
            character: null
        }))
        const { data } = await API_SERVICE.getOneCharacter(id)
        this.setState(prevState => ({
            ...prevState,
            character: data
        }))
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

        if (this.state.registerForm.password.length > 7) {

            const { username, email, password } = this.state.registerForm

            this.setState(prevState => ({
                ...prevState,
                registerForm: {
                    username: '',
                    email: '',
                    password: ''
                },
                error: false,
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

        } else {

            this.setState(prevState => ({
                ...prevState,
                error: true
            }))

        }

    }

    handleLogOut = e => {

        this.setState(prevState => ({
            ...prevState,
            isLoggedIn: false,
            loggedUser: {
                username: '',
                email: '',
                password: ''
            }
        }))

    }

    render() {

        const {
            state,
            getCharacter,
            handleRegisterInput,
            handleRegisterSubmit,
            handleLogOut
        } = this

        return (
            <MyContext.Provider
                value={{
                    state,
                    getCharacter,
                    handleRegisterInput,
                    handleRegisterSubmit,
                    handleLogOut
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )

    }
    
}

export default withRouter(MyProvider)