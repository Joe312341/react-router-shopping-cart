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
import FruitsPage from './containers/Fruits/FruitsPage';
import VegetablesPage from './containers/Vegetables/VegetablesPage';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';

const store = createStore(
   rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <Router>
            <div>
              <ul>
                <li><Link to="/fruits/order">Fruits</Link></li>
                <li><Link to="/vegtables/order">Vegetables</Link></li>
              </ul>
              <hr/>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/fruits" component={FruitsPage}/>
                <Route path="/vegtables" component={VegetablesPage}/>
                <Route component={NotFoundPage}/>
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
