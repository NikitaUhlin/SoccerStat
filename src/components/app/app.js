import React from 'react';
import Header from '../header/header';
import './app.css';
import CompetitionsList from '../competitionsList/competitionsList';
import TeamsList from '../teamsList/teamsList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamCalendar from '../teamCalendar/teamCalendar';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="app_content">
          <Switch>
            <Route path='/competitions'>
              <CompetitionsList />
            </Route>
            <Route
              path='/teams'
              exact>
              <TeamsList />
            </Route>
            <Route path='/teams/:id'>
              <TeamCalendar />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App;
