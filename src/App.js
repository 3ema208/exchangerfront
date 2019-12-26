import React from 'react';
import './App.css';
import {Container} from "@material-ui/core"
import {Provider} from 'react-redux'

import Header from "./components/Header"
import { createStore } from 'redux';

import rootReducers from './store/reducers'
import Auth from './components/auth/authContainer'

const Store = createStore(rootReducers)

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Container maxWidth='lg'>
          <Header/>
            <Container>
              <Auth></Auth>
            </Container>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
