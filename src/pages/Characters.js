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
            else return <div style={{width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '200px'}}><img style={{height: '100px'}} src='https://res.cloudinary.com/evilvic/image/upload/v1587415948/rick-n-morty/rnm-gif.gif' alt='Rick loading...'/><p style={{color: 'white'}}>Loading...</p></div>
        }}
    </MyContext.Consumer>
)

export default Characters
