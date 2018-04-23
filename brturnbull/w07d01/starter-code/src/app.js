import angular from 'angular';

//styles
import 'bulma';
import './scss/style.scss';

//3rd party dependencies
import '@uirouter/angularjs';

//our modules
import Router from './config/router';

import ThingsIndexCtrl from './controllers/things/index';

angular.module('things', ['ui.router'])
  .config(Router)
  .controller('ThingsIndexCtrl', ThingsIndexCtrl);
