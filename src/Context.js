import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router-dom'

export const MyContext = createContext()

class MyProvider extends Component {

    state = {
        characters: []
    }

    render() {

        const {
            state
        } = this

        return (
            <MyContext.Provider
                value={{
                    state
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default withRouter(MyProvider)