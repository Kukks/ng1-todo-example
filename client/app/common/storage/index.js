import angular from 'angular';
import {StorageService} from './storage.service';

export const StorageModule = angular.module('storage', [])
  .service('storage', StorageService);
