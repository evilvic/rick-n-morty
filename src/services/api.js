import axios from 'axios'

const baseURL = 'https://rickandmortyapi.com/api'

const MY_SERVICE = axios.create({
    baseURL,
    withCredentials: false
})

const API_SERVICE = {
    getCharacters: async () => {
        return await MY_SERVICE.get('/character')
    },
    getOneCharacter: async id => {
        return await MY_SERVICE.get(`/character/${id}`)
    },
    getEpisodes: async () => {
        return await MY_SERVICE.get('/episode')
    }
}

export default API_SERVICE