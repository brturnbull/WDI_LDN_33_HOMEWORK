import angular from 'angular';
import MainCtrl from './controllers/main';
import './scss/style.scss';
import 'bulma';


angular.module('cityMapper', [])
  .controller('MainCtrl', MainCtrl);
