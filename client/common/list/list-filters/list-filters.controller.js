import {ListItemStates} from '../list.models';
export default class ListFiltersController {

  showAll() {
    this.filter = null;
    this.fireCallback();
  }

  showPending() {
    this.filter = ListItemStates.PENDING;
    this.fireCallback();
  }

  showCompleted() {
    this.filter = ListItemStates.COMPLETED;
    this.fireCallback();
  }

  fireCallback() {
    this.onFilterChange({filter: this.filter});
  }
}
