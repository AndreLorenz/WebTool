/* global process */
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngTouch from 'angular-touch';
import ngBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import 'lodash';
import 'restangular';
import 'angular-bootstrap-grid-tree/src/tree-grid-directive';
import 'tree-model/dist/TreeModel';

import 'angular-bootstrap-grid-tree/src/treeGrid.css';
import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import config from 'app.config';

import appConfig from './app.config';
import appRoute from './app.route';
import appComponent from './app.component';

export default angular.module('tree-view', [
  ngAnimate,
  ngAria,
  ngTouch,
  ngBootstrap,
  'restangular',
  uiRouter,
  'treeGrid'
])
.config(appConfig)
.config(appRoute)
.constant('CONFIG', config)
.constant('ENVIRONNEMENT', process.env.ENV_NAME)
.component('app', appComponent)
.name;
