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
        episodes: [],
        episode: null,
        episodeCharacters: []
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

    getEpisode = async id => {

        this.setState(prevState => ({
            ...prevState,
            episode: null,
            episodeCharacters: []
        }))

        const { data, data : {characters} } = await API_SERVICE.getOneEpisode(id)

        const regExp = /\d+/g
        const charactersArray = []
        characters.forEach(character => charactersArray.push(character.match(regExp)[0]))
        
        const { data : episodeCharacters } = await API_SERVICE.getEpisodeCharacters(charactersArray)

        this.setState(prevState => ({
            ...prevState,
            episode: data,
            episodeCharacters: episodeCharacters
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
            getEpisode,
            handleRegisterInput,
            handleRegisterSubmit,
            handleLogOut
        } = this

        return (
            <MyContext.Provider
                value={{
                    state,
                    getCharacter,
                    getEpisode,
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