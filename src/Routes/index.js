import React from 'react'
import { Route, Switch } from 'react-router'
import Favorites from '../Pages/Favorites'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import MusicPage from '../Pages/MusicPage'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/favorites" component={Favorites}/>
      <Route exact path="/music" component={MusicPage}/>
    </Switch>
  )
}

export default Routes