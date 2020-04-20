import React from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../Context'
import { StyledCard } from '../style/components'

const Card = ({src, name, place, id}) => (
    <MyContext.Consumer>
        {context => (
            <StyledCard>
                <img src={src} alt={name} />
                <h3>{name}</h3>
                <h4>{place}</h4>
                <Link
                    to='/character'
                    onClick={() => context.getCharacter(id)}
                >More Info</Link>
            </StyledCard>
        )}
    </MyContext.Consumer>
)

export default Card
