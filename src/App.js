import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Trend from './pages/Trend';
import Beauty from './pages/Beauty';
import Spotlight from './pages/Spotlight';
import Store from "./pages/Store";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => (
  <Router>
    <div>
      <Nav />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/trend" component={ Trend } />
          <Route exact path="/beauty" component={ Beauty } />
          <Route exact path="/spotlight" component={ Spotlight } />
          <Route exact path="/store" component={ Store } />
        </Switch>
    </div>
  </Router>
);

export default App;
