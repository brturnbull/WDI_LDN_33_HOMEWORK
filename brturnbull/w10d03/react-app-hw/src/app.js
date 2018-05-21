import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch} from 'react-router-dom';

import Home from './components/home';
import Navbar from './components/Navbar';

import BandsIndex from './components/bands/Index';
import BandsShow from './components/bands/Show';
import BandsEdit from './components/bands/Edit';
import BandsNew from './components/bands/New';

import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import Auth from './lib/Auth';
import SecureRoute from './components/common/SecureRoute';
import NotFound from './components/common/NotFound';
import FlashMessages from './components/common/FlashMessages';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  handleLogout = () => {
    Auth.logout();
  }

  render() {
    return(
      <Router>
        <main>
          <Navbar />
          <FlashMessages />
          <section className="section">
            <div className="container">
              <Switch>
                <SecureRoute exact path="/bands/new" component={BandsNew} />
                <SecureRoute exact path="/bands/:id/edit" component={BandsEdit} />
                <Route path="/bands/:id" component={BandsShow} />
                <Route path="/bands" component={BandsIndex} />
                <Route path="/login" component={AuthLogin} />
                <Route path="/register" component={AuthRegister} />
                <Route exact path="/" component={Home} />
                <Route path="/" component={NotFound} />
              </Switch>
            </div>
          </section>
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
