import React from 'react'
import { MyContext } from '../Context'
import { StyledGallery } from '../style/components'

const Episodes = () => (
    <MyContext.Consumer>
        {context => {
            const {episodes} = context.state
            if (episodes)
            return (
                <section className='gallery'>
                    <h2>Episodes</h2>
                    <StyledGallery>
                        <table>
                            <tbody>
                                {episodes.map(episode => <tr key={episode.id}>
                                                            <td>{episode.name}</td>
                                                            <td>{episode.air_date}</td>
                                                         </tr>)}  
                            </tbody>
                        </table>
                    </StyledGallery>
                </section>
            )
            else return <h3>Loading...</h3>
        }}
    </MyContext.Consumer>
)

export default Episodes
