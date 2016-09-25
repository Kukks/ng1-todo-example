import angular from 'angular';
import 'angular-ui-router';
import controller from './add-list-page.controller';
import template from './add-list-page.html!text';
import './add-list-page.css!';

export const AddListPageModule = angular.module('add-list-page', [
  'ui.router'
])
  .config(($stateProvider) => {
    $stateProvider
      .state('add-list-page', {
        url: '/add',
        template: template,
        controller: controller,
        controllerAs: 'vm',
        scope: {},
        bindToController: true
      });
  });
