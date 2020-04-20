import React from 'react'
import { MyContext } from '../Context'
import Card from '../components/Card'
import { StyledEpisodes, StyledGallery} from '../style/components'

const Episode = () => (
    <MyContext.Consumer>
        {context => {
            const {episode, episodeCharacters} = context.state
            if (episode)
            return (
                <section className='gallery'>
                    <h2>{episode.name}</h2>
                    <StyledEpisodes>
                        <tbody>
                            <tr>
                                <th className='yellow'>DATE</th>
                                <td className='description'>{episode.air_date}</td>
                            </tr>
                            <tr>
                                <th className='yellow'>EPISODE</th>
                                <td className='description'>{episode.episode}</td>
                            </tr>
                        </tbody>
                    </StyledEpisodes>
                    <h3 className='characters'>Characters</h3>
                    <StyledGallery>
                        {episodeCharacters.map(character => <Card 
                                                        key = {character.id} 
                                                        src = {character.image}
                                                        name = {character.name}
                                                        place = {character.location.name}
                                                        id = {character.id}
                                                     />)}
                    </StyledGallery>
                </section>
            )
            else return <h3>Loading...</h3>
        }}
    </MyContext.Consumer>
)

export default Episode
