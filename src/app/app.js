/* global process */
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngTouch from 'angular-touch';
import ngBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import ngStorage from 'ngstorage'
import 'lodash';
import 'restangular';
import 'angular-bootstrap-grid-tree/src/tree-grid-directive';
import 'tree-model/dist/TreeModel';
import 'angular-strap/dist/angular-strap.min.js';
import 'angular-strap/dist/angular-strap.compat.min.js';
import 'angular-strap/dist/angular-strap.tpl.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import 'angular-bootstrap-grid-tree/src/treeGrid.css';

import config from 'app.config';

import appConfig from './app.config';
import appRoute from './app.route';
import appComponent from './app.component';
import loginController from './login/login.controller';
import previewGeneratorController from './generator/preview-generator.controller';
import generatorController from './generator/generator.controller';


import { GeneratorService } from './services/generator.service';
import { AuthService } from './services/auth.service';

export default angular.module('tree-view', [
  ngAnimate,
  ngAria,
  ngTouch,
  ngBootstrap,
  'ngStorage',
  'restangular',
  uiRouter,
  'treeGrid',
  'mgcrea.ngStrap'
])
.config(appConfig)
.config(appRoute)
.constant('CONFIG', config)
.constant('ENVIRONNEMENT', process.env.ENV_NAME)
.component('app', appComponent)
.component('login', loginController)
.component('previewGenerator', previewGeneratorController)
.component('generator', generatorController)
.service('generatorService', GeneratorService)
.service('authService', AuthService)
.name;
