import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';

import './assets/scss/style.scss';
import 'bulma';

import MusicShow from './components/music/Show';
import MusicIndex from './components/music/Index';


class App extends React.Component {

  render(){
    return(
      <div>
        <Router>
          <div>
            <nav>
              <div className="logo" />
            </nav>
            <p> Beyond </p>
            <Switch>
              <Route path="/music/:id" component={MusicShow} />
              <Route path="/" component={MusicIndex} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
