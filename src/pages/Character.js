import React from 'react'
import { MyContext } from '../Context'
import { StyledTable } from '../style/components'

const Character = () => (
    <MyContext.Consumer>
        {context => {
            const {character} = context.state
            if (character)
            return (
                <section className='gallery'>
                    <h2>{character.name}</h2>
                    <StyledTable>
                        <img src={character.image} alt={character.name}/>
                        <table>
                            <tbody>
                                <tr>
                                    <th>STATUS</th>
                                    <td>{character.status}</td>
                                </tr>
                                <tr>
                                    <th>SPECIES</th>
                                    <td>{character.species}</td>
                                </tr>
                                <tr>
                                    <th>TYPE</th>
                                    <td>{character.type}</td>
                                </tr>
                                <tr>
                                    <th>GENDER</th>
                                    <td>{character.gender}</td>
                                </tr>
                                <tr>
                                    <th>ORIGIN</th>
                                    <td>{character.origin.name}</td>
                                </tr>
                                <tr>
                                    <th className='no-border'>LOCATION</th>
                                    <td className='no-border'>{character.location.name}</td>
                                </tr>
                            </tbody>
                        </table>
                    </StyledTable>
                </section>
            )
            else return <div style={{width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '200px'}}><img style={{height: '100px'}} src='https://res.cloudinary.com/evilvic/image/upload/v1587415948/rick-n-morty/rnm-gif.gif' alt='Rick loading...'/><p style={{color: 'white'}}>Loading...</p></div>
        }}
    </MyContext.Consumer>
)

export default Character
