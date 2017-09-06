import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AllArtists from './components/AllArtists';
import Artist from './components/Artist';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import GlobalNav from './components/GlobalNav.js';
import NewArtist from './components/NewArtist';
import Profile from './components/Profile';
import { setAxiosDefaults } from './util';

class App extends Component {
  componentWillMount(){
    setAxiosDefaults()
  }
  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/" component={AllArtists}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route path="/artist/:id" component={Artist}/>
          <Route exact path="/artist/new" component={NewArtist} />
          <Route exact path="/profile" component={Profile}/>
        </div>
      </Router>
    );
  }
}

export default App;