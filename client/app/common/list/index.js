import angular from 'angular';
import 'angular-ui-router';
import {ListDirective} from './list.component';

export const ListModule = angular.module('list', [
  'ui.router'
])
  .directive('list', () => new ListDirective());
