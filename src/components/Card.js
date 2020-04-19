import React from 'react'
import { StyledCard } from '../style/components'

const Card = ({src, name, place}) => (
    <StyledCard>
        <img src={src} alt={name} />
        <h3>{name}</h3>
        <h4>{place}</h4>
    </StyledCard>
)

export default Card
