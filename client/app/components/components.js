import angular from 'angular';
import {HomeModule} from './home/index';

let componentModule = angular.module('app.components', [
  HomeModule.name
]);

export default componentModule;
