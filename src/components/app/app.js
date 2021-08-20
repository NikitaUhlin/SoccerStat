import React from 'react';
import Header from '../header/header';
import './app.css';
import CompetitionsList from '../competitionsList/competitionsList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' />
          <Route path='/competitions'>
            <CompetitionsList />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
