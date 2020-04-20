import React from 'react'
import { MyContext } from '../Context'

const Home = () => (
    <MyContext.Consumer>
        {context => (
            <section className="home-container" id="home-bg">
                <div className='white-rectangle'>
                    <h2>"wubba lubba dub dub"</h2>
                    <p>- Rick Sanchez</p>
                </div>
            </section>
        )}
    </MyContext.Consumer>
)

export default Home
