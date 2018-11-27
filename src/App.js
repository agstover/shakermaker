import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/App.css';

import Browse from './components/Browse'
import Maker from './components/Maker'
import Canvas from './components/Canvas'




class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Canvas />
        <Router>
          <Switch>
            <Route path='/' exact component={Maker}/>
            <Route path='/browse' component={Browse}/>            
          </Switch>
        </Router>    
      </div>    
    )
  }
}

export default App
