import React from 'react';
import axios from "axios"
import './App.css';
import { Container } from "@material-ui/core"
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux';
import rootReducers from './store/reducers'

import Header from "./components/layout/Header"
import Body from "./components/layout/Body"
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'


const NOT_AUTH_STATUS_CODE = 401

axios.interceptors.response.use(
  (responce) => {
    return responce
  },
  (error) => {
    let { status } = error.response
    if (status === NOT_AUTH_STATUS_CODE) {
      window.location = '/'
    }
    return Promise.reject(error)
  }
)

const Store = createStore(rootReducers, applyMiddleware(thunk))
let token = Store.getState().auth.token 
if (token) {
  axios.defaults.headers.common['Authorization'] = `Token ${token}`
}


function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Container maxWidth='lg'>
          <Router>
            <Header />
            <Body />
          </Router>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
