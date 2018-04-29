import angular from 'angular';
import MainCtrl from './controllers/main';
import 'bulma';
import './scss/style.scss';


angular.module('cityMapper', [])
  .controller('MainCtrl', MainCtrl);
