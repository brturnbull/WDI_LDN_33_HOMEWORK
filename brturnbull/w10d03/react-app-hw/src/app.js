import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './components/home';
import BandsIndex from './components/bands/Index';
import BandsShow from './components/bands/Show';

class App extends React.Component {

  render() {
    return(
      <Router>
        <main>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/bands">All the bands</Link>
          </nav>
          <Switch>
            <Route path="/bands/:id" component={BandsShow} />
            <Route path="/bands" component={BandsIndex} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
