import React from 'react'
import { MyContext } from '../Context'
import { StyledEpisodes } from '../style/components'

const Episode = () => (
    <MyContext.Consumer>
        {context => {
            const {episode} = context.state
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
                </section>
            )
            else return <h3>Loading...</h3>
        }}
    </MyContext.Consumer>
)

export default Episode
