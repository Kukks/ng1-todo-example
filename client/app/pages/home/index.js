import angular from 'angular';
import 'angular-ui-router';
import controller from './home.controller';
import template from './home.html!text';
import './home.css!';


export const HomeModule = angular.module('home', [
  'ui.router'
])
  .config(($stateProvider, $urlRouterProvider)=> {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: template,
        controller: controller,
        controllerAs: 'vm',
        scope: {},
        bindToController: true
      })
  });
