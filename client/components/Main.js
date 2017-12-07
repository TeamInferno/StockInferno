import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import Graph from './Graph';
import {Controller} from 'react-materialize'

const Main = (props) => (
  <div id="main">     
      <Switch>
        <Route exact path='/home' render={() => (<Portfolio stocks={props.stocks} />)} />
        <Route path='/graph/:symbol' component={Graph}/>
      </Switch>
  </div>
)

export default Main;