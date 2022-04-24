import React from 'react'
import { Route, Switch } from 'react-router'
import { useUserContext } from '../Context/userContext'
import Favorites from '../Pages/Favorites'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import MusicPage from '../Pages/MusicPage'
import Recomendation from '../Pages/Recomendation'
import Recomendation_fav from '../Pages/Recomendation _fav'
import Liked_by from '../Pages/Liked_by'

const Routes = () => {
  const { user } = useUserContext();

  return (
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/favorites" component={Favorites}/>
      <Route exact path="/music/:id" component={MusicPage}/>
      <Route exact path="/recommend" component={Recomendation}/>
      <Route exact path="/recommend_fav" component={Recomendation_fav}/>
      <Route exact path="/liked_by/:id" component={Liked_by}/>

      {
        user ? <Route path="*" component={Home}/> : <Route path="*" component={Login}/>
      }
    </Switch>
  )
}

export default Routes