export default class AddListPageController {
  constructor($state) {
    this.$state = $state;
  }

  onListAdd(listIndex) {
    if(listIndex) {
      this.$state.go('list-page', {listIndex: listIndex});
    }
  }


}

