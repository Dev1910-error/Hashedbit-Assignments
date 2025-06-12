import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import BookingPage from './pages/BookingPage';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={MoviePage} />
        <Route path="/booking" component={BookingPage} />
      </Switch>
    </Router>
  );
};

export default App;