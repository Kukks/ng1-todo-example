import angular from 'angular';
import 'angular-ui-router';
import {HomeComponent} from './home.component';

export const HomeModule = angular.module('home', [
  'ui.router'
])
  .config(($stateProvider, $urlRouterProvider)=> {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: '<home></home>'
      });
  })
  .directive('home', ()=> new HomeComponent());
