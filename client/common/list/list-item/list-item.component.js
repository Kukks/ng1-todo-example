import template from './list-item.html!text';
import controller from './list-item.controller';
import './list-item.css!';

export class ListItemDirective {
  constructor() {
    this.template = template;
    this.controller = controller;
    this.restrict = 'E';
    this.controllerAs = 'vm';
    this.scope = {
      onRemove: '&?',
      onSubmit: '&',
      item: '=?'
    };
    this.bindToController = true;
  }
}
