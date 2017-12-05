import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import Graph from './Graph';

const Main = () => (
  <main>
    <h1>Main Page Hello World</h1>
    <Switch>
      <Route exact path='/home' component={Portfolio}/>
      <Route path='/graph' component={Graph}/>
    </Switch>
  </main>
)

export default Main;