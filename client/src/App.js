import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from 'react-router-dom'
import axios from 'axios'
//setup redux later

//components
import Home from './Home'
import Album from './Album'
import Picture from './Picture'

//styles
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/album/:albumid/:imageid" component={Picture}/>
          <Route path="/album/:albumid" component={Album} />
        </Switch>
      </Router>
    );
  }
}

export default App;
