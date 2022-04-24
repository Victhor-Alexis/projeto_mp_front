import React from 'react'
import { Route, Switch } from 'react-router'
import { useUserContext } from '../Context/userContext'
import Favorites from '../Pages/Favorites'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import MusicPage from '../Pages/MusicPage'

const Routes = () => {
  const { user } = useUserContext();

  return (
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/favorites" component={Favorites}/>
      <Route exact path="/music/:id" component={MusicPage}/>
      {
        user ? <Route path="*" component={Login}/> : <Route path="*" component={Home}/>
      }
    </Switch>
  )
}

export default Routes