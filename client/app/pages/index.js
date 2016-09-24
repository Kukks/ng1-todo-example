import angular from 'angular';
import {HomeModule} from './home/index';

export let PagesModule = angular.module('app.components', [
  HomeModule.name
]);

