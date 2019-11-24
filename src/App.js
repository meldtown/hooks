import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";

import './App.css';
import 'typeface-roboto';

import {Provider} from "react-redux";
import store from './store';
import {HomePage, NotFoundPage, TodosDetailsPage} from "./pages";

function App() {
  return <Provider store={store}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/todos/:id">
            <TodosDetailsPage/>
          </Route>
          <Route>
            <NotFoundPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  </Provider>
}

export default App;
