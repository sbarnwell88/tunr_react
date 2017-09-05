import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AllArtists from './components/AllArtists';
import Artist from './components/Artist';
import Signup from './components/Signup';
import GlobalNav from './components/GlobalNav';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalNav/>
          <Route exact path='/' component={AllArtists} />
          <Route exact path='/artist/:id' component={Artist} />
          <Route exact path='/signup' component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
