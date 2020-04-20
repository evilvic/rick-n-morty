import React from 'react'
import { MyContext } from '../Context'
import Card from '../components/Card'
import { StyledGallery } from '../style/components'

const Characters = () => (
    <MyContext.Consumer>
        {context =>  {
            const {characters} = context.state
            if (characters)
            return (
                <section className='gallery'>
                    <h2>Characters</h2>
                    <StyledGallery>
                        {characters.map(character => <Card 
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

export default Characters
