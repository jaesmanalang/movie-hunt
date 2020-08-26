import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetail from './pages/MovieDetail';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movie/:id" component={MovieDetail} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;

// TV and Movie Fetch conflict.
