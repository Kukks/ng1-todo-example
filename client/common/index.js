import angular from 'angular';
import {ListModule} from './list/index';
import {StorageModule} from './storage/index';

export let CommonModule = angular.module('app.common', [
  ListModule.name,
  StorageModule.name
]);

