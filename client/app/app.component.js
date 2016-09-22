import template from './app.html!text';
import './app.css!';

export class AppComponent {
  constructor() {
    this.template = template;
    this.restrict = 'E';
  }
}

