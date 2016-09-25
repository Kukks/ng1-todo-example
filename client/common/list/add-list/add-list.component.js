import template from './add-list.html!text';
import controller from './add-list.controller';
import './add-list.css!';

export class AddListDirective {
  constructor() {
    this.template = template;
    this.controller = controller;
    this.restrict = 'E';
    this.controllerAs = 'vm';
    this.scope = {
      onAdd: '&?'
    };
    this.bindToController = true;
  }
}
