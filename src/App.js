import React from 'react';
import axios from "axios"
import './App.css';
import {Container} from "@material-ui/core"
import {Provider} from 'react-redux'

import { createStore, applyMiddleware } from 'redux';
import rootReducers from './store/reducers'

import Header from "./components/layout/Header"
import Body from "./components/layout/Body"
import thunk from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom' 

// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";
const Store = createStore(rootReducers, applyMiddleware(thunk))

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Container maxWidth='lg'>
          <Router>
            <Header/>
            <Body/>
          </Router>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
