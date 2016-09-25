import template from './list-filters.html!text';
import controller from './list-filters.controller';
import './list-filters.css!';

export class ListFiltersDirective {
  constructor() {
    this.template = template;
    this.controller = controller;
    this.restrict = 'E';
    this.controllerAs = 'vm';
    this.scope = {
      onFilterChange: '&',
      filter: '='
    };
    this.bindToController = true;
  }
}
