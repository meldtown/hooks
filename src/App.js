import React from 'react';
import './App.css';
import 'typeface-roboto';
import {Provider} from "react-redux";
import store from './store';

function App() {
  return <Provider store={store}>
    <div className="App">
      <h1>Our amazing app</h1>
    </div>
  </Provider>
}

export default App;
