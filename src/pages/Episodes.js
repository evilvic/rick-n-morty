import React from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../Context'
import { StyledGallery, StyledEpisodes } from '../style/components'

const Episodes = () => (
    <MyContext.Consumer>
        {context => {
            const {episodes} = context.state
            if (episodes)
            return (
                <section className='gallery'>
                    <h2>Episodes</h2>
                    <StyledGallery>
                        <StyledEpisodes>
                            <thead>
                                <tr>
                                    <th className='table-title'>NAME</th>
                                    <th className='table-title'>DATE</th>
                                    <th className='table-title'>MORE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {episodes.map(episode => <tr key={episode.id}>
                                                            <td className='episode'>{episode.name}</td>
                                                            <td className='date'>{episode.air_date}</td>
                                                            <td className='more'><Link 
                                                                                    to='episode'
                                                                                    onClick={() => context.getEpisode(episode.id)}
                                                                                 >More Info
                                                                                 </Link></td>
                                                         </tr>)}  
                            </tbody>
                        </StyledEpisodes>
                    </StyledGallery>
                </section>
            )
            else return <h3>Loading...</h3>
        }}
    </MyContext.Consumer>
)

export default Episodes
