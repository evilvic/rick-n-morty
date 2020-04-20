import React from 'react'
import { MyContext } from '../Context'

const Character = () => (
    <MyContext.Consumer>
        {context => {
            const {character} = context.state
            if (character)
            return (
                <>
                <h2>{context.state.character.name}</h2>
            </>
            )
            else return <h3>Loading...</h3>
        }}
    </MyContext.Consumer>
)

export default Character
