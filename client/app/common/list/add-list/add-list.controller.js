import {List} from "../list.models";
import {Reflection} from "../../../utils/reflection";
export default class AddListController {
  constructor($scope, listService) {
    this.$scope = $scope;
    this.listService = listService;
    this.showValidationMessage = false;
    this.reset();
  }

  createList() {
    if (this.handleValidation()) {
      let listIndex = this.listService.addNewList(new List(this.name));
      this.reset();
      if (this.onAdd) {
        this.onAdd({listIndex: listIndex});
      }
    }
  }

  handleValidation() {
    this.showValidationMessage = (!this.name || this.name === "");
    return !this.showValidationMessage;
  }

  reset() {
    this.name = "";
    this.showValidationMessage = false;
  }
}
