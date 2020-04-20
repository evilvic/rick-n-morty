import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Character from './pages/Character'
import Episodes from './pages/Episodes'
import Register from './pages/Register'

const Router = () => (
    <>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/characters' component={Characters} />
            <Route exact path='/character' component={Character} />
            <Route exact path='/episodes' component={Episodes} />
            <Route exact path='/register' component={Register} />
        </Switch>
    </>
)

export default Router
