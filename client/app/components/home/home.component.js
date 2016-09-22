import controller from './home.controller';
import template from './home.html!text';
import './home.css!';

export class HomeComponent {
  constructor() {
    this.template = template;
    this.controller = controller;
    this.restrict = 'E';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = true;
  }
}

