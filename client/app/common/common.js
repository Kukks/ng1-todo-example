import angular from 'angular';
import {ListModule} from './list/index';
import {StorageModule} from './storage/index';

let commonModule = angular.module('app.common', [
  ListModule.name,
  StorageModule.name
]);

export default commonModule;
