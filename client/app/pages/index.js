import angular from 'angular';
import {ListsPageModule} from './lists-page/index';
import {AddListPageModule} from './add-list-page/index';
import {ListPageModule} from './list-page/index';

export let PagesModule = angular.module('app.components', [
  ListsPageModule.name,
  AddListPageModule.name,
  ListPageModule.name,
]).config(($urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
})

