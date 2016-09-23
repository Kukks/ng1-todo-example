import template from './list.html!text';
import controller from './list.controller';
import './list.css!';

export class ListDirective {
  constructor() {
    this.template = template;
    this.controller = controller;
    this.restrict = 'E';
    this.controllerAs = 'vm';
    this.scope = {
      listIndex :'=',
      list: '='
    };
    this.bindToController = true;
  }
}
