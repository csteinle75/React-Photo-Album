import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//components
import Home from './Home'
import Album from './Album'
import Picture from './Picture'
import AddContent from './AddContent'

//styles
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/album/:albumid/:imageid" component={Picture} />
          <Route path="/album/:albumid" component={Album} />
          <Route path="/addimages" component={AddContent} />
          <Route render={()=><div>404</div>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
