import angular from 'angular';
import 'angular-ui-router';
import controller from './lists-page.controller';
import template from './lists-page.html!text';
import './lists-page.css!';


export const ListsPageModule = angular.module('lists-page', [
  'ui.router'
])
  .config(($stateProvider)=> {
    $stateProvider
      .state('lists-page', {
        url: '/',
        template: template,
        controller: controller,
        controllerAs: 'vm',
        scope: {},
        bindToController: true
      })
  });
