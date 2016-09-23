import template from './list-name.html!text';
import controller from './list-name.controller';
import './list-name.css!';

export class ListNameDirective {
  constructor() {
    this.template = template;
    this.controller = controller;
    this.restrict = 'E';
    this.controllerAs = 'vm';
    this.scope = {
      onNameChange: '&',
      name: '='
    };
    this.bindToController = true;
  }
}
