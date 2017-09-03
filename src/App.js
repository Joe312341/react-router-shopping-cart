import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import HomePage from './containers/HomePage';
import NotFoundPage from './NotFoundPage';
import FruitsPage from './containers/FruitsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Router>
          <div>
            <ul>
              <li><Link to="/fruits/order">Fruits</Link></li>
            </ul>
            <hr/>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/fruits" component={FruitsPage}/>
              <Route component={NotFoundPage}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
