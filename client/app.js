import angular from 'angular';
import 'angular-ui-router';
import {CommonModule} from './common/index';
import {PagesModule} from './pages/index';
import {AppComponent} from './app.component';
import 'normalize.css';

let appModule = angular.module('app', [
  'ui.router',
  CommonModule.name,
  PagesModule.name
])
  .directive('app', () => new AppComponent());

/*
 * As we are using ES6 with Angular 1.x we can't use ng-app directive
 * to bootstrap the application as modules are loaded asynchronously.
 * Instead, we need to bootstrap the application manually
 */
let container = document.getElementById('app-container');
let noAngularDOM;

angular.element(document).ready(() => {
  //Start of hot-reloader code. Remove in production
  if (window.System && location.origin.match(/localhost/)) {
    System.trace = true;
    noAngularDOM = container.cloneNode(true);
    if ((!System.hotReloader)) {
      System.import('systemjs-hot-reloader').then(HotReloader => {
        System.hotReloader = new HotReloader.default('http://localhost:8081/');
        System.hotReloader.on('change', function (name) {
          console.log(name, 'changed');
        });
      });
    }
  }
  // End of hot reloader code
  angular.bootstrap(container, [appModule.name]), {
    strictDi: true
  };
});

export default appModule;
export function __unload() {
  container = document.getElementById('app-container');
  container.remove();
  document.body.appendChild(noAngularDOM.cloneNode(true));
}
