import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Scenes Routes
import {
  PokemonList,
  PokemonDetail
} from '@Containers';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={PokemonList} />
      <Route path='/:id' component={PokemonDetail} />
    </Switch>
  </Router>
);

export default Routes;