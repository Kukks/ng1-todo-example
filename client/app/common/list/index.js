import angular from 'angular';
import 'angular-ui-router';
import {ListDirective} from './list/list.component';
import {ListService} from './list.service';
import {ListFiltersDirective} from './list-filters/list-filters.component';
import {ListNameDirective} from './list-name/list-name.component';
import {ListItemDirective} from './list-item/list-item.component';
import {OppositeStateFilter, StateToTextFilter} from './list.filters';

export const ListModule = angular.module('list', [
  'ui.router'
])
  .service('listService', ListService)
  .filter('oppositeState', ()=> new OppositeStateFilter.OppositeStateFilterFactory)
  .filter('stateToText', ()=> new StateToTextFilter.StateToTextFilterFactory)
  .directive('listName', () => new ListNameDirective())
  .directive('listFilters', () => new ListFiltersDirective())
  .directive('listItem', () => new ListItemDirective())
  .directive('list', () => new ListDirective());
