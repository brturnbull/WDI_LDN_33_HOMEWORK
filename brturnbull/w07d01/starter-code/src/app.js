import angular from 'angular';

//styles
import 'bulma';
import './scss/style.scss';

//3rd party dependencies
import '@uirouter/angularjs';

//our modules
import Router from './config/router';

import ThingsIndexCtrl from './controllers/things/index';
import ThingsNewCtrl from './controllers/things/new';
import ThingsShowCtrl from './controllers/things/show';
import ThingsEditCtrl from './controllers/things/edit';

import Thing from './models/thing';

angular.module('things', ['ui.router'])
  .config(Router)
  .controller('ThingsNewCtrl', ThingsNewCtrl)
  .controller('ThingsIndexCtrl', ThingsIndexCtrl)
  .controller('ThingsShowCtrl', ThingsShowCtrl)
  .controller('ThingsEditCtrl', ThingsEditCtrl)
  .service('Thing', Thing);
