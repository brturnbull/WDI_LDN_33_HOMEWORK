import angular from 'angular';

//styles
import 'bulma';
import './scss/style.scss';

//3rd party dependencies
import '@uirouter/angularjs';
import 'satellizer';

//our modules
import Router from './config/router';
import Auth from './config/auth';

import MainCtrl from './controllers/main';
import ThingsIndexCtrl from './controllers/things/index';
import ThingsNewCtrl from './controllers/things/new';
import ThingsShowCtrl from './controllers/things/show';
import ThingsEditCtrl from './controllers/things/edit';

import LoginCtrl from './controllers/auth/login';
import RegisterCtrl from './controllers/auth/register';

import Thing from './models/thing';

angular.module('things', ['ui.router', 'satellizer'])
  .config(Router)
  .config(Auth)
  .controller('MainCtrl', MainCtrl)
  .controller('LoginCtrl', LoginCtrl)
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('ThingsNewCtrl', ThingsNewCtrl)
  .controller('ThingsIndexCtrl', ThingsIndexCtrl)
  .controller('ThingsShowCtrl', ThingsShowCtrl)
  .controller('ThingsEditCtrl', ThingsEditCtrl)
  .service('Thing', Thing);
