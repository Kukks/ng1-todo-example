import angular from 'angular';
import 'angular-ui-router';
import controller from './list-page.controller';
import template from './list-page.html!text';
import './list-page.css!';

export const ListPageModule = angular.module('list-page', [
  'ui.router'
])
  .config(($stateProvider) => {
    $stateProvider
      .state('list-page', {
        url: '/:listIndex',
        template: template,
        controller: controller,
        controllerAs: 'vm',
        scope: {},
        bindToController: true
      });
  })
