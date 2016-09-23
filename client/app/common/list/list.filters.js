import {ListItemStates} from './list.models';
export class OppositeStateFilter {

  toView(input) {
    switch (input) {
      case ListItemStates.PENDING:
        return ListItemStates.COMPLETED;
      case ListItemStates.COMPLETED:
        return ListItemStates.PENDING;
      default:
        return null;
    }
  }

  static OppositeStateFilterFactory() {
    let filter = new OppositeStateFilter();
    return filter.toView;
  }

}

export class StateToTextFilter {
  toView(input) {
    switch (input) {
      case ListItemStates.PENDING:
        return 'Pending';
      case ListItemStates.COMPLETED:
        return 'Completed';
      default:
        return '';
    }
  }

  static StateToTextFilterFactory() {
    let filter = new StateToTextFilter();
    return filter.toView;
  }
}
