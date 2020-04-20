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
                                <th className='yellow'>NAME</th>
                                <td className='description'>{episode.name}</td>
                            </tr>
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
            else return <div style={{width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '200px'}}><img style={{height: '100px'}} src='https://res.cloudinary.com/evilvic/image/upload/v1587415948/rick-n-morty/rnm-gif.gif' alt='Rick loading...'/><p style={{color: 'white'}}>Loading...</p></div>
        }}
    </MyContext.Consumer>
)

export default Episode
