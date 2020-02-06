import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Switch, Router } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <div><Navbar /></div>
          <Switch>
            <Router path ='/signin' component = {SignIn} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
