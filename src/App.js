import React from 'react';
import axios from "axios"
import './App.css';
import {Container} from "@material-ui/core"
import {Provider} from 'react-redux'

import { createStore, applyMiddleware } from 'redux';
import rootReducers from './store/reducers'

import Header from "./components/Header"
import Auth from './components/auth/authContainer'
import thunk from 'redux-thunk'
import {Switch, BrowserRouter as Router} from 'react-router-dom' 

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

const Store = createStore(rootReducers, applyMiddleware(thunk))

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Container maxWidth='lg'>
          <Router>
            <Header/>
            <Container>
              <Switch>
                <Router path='/login'>
                  <Auth></Auth>
                </Router>
                <Router path='/registration'>
                  <div>reg</div>
                </Router>
              </Switch>
            </Container>
          </Router>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
