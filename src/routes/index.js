import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/* COMPONENTS */
import LastRelease from '../components/LastRelease';
import Artist from '../components/Artist';

const RedirectRoute = () => <Redirect to="/lanzamientos"/>;

const Router = () => (
  <Switch>
    <Route path='/lanzamientos' exact strict component={LastRelease}/>
    <Route path='/artista/:id' component={Artist}/>
    <Route path='*' component={RedirectRoute}/>
  </Switch>
);
 
export default Router;