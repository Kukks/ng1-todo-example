import {Reflection} from "../../../utils/reflection";
export default class ListNameController {
  constructor($scope) {
    this.$scope = $scope;
    this.reset();
    this.watch();
  }

  reset() {
    this.showValidationMessage = false;
    this.nameEditMode = false;
    this.newName = this.name;
  }

  editName() {
    this.nameEditMode = true;
    this.newName = this.name;
  }

  handleValidation() {
    this.showValidationMessage = (!this.newName || this.newName === "");
    return !this.showValidationMessage;
  }


  cancelNameEdit() {
    this.reset();
  }

  submitNameChange() {
    if (this.handleValidation()) {
      this.name = this.newName;
      this.reset();
      this.onNameChange({name: this.name});
    }
  }

  watch() {
    this.$scope.$watch(
      Reflection.getPropertyName(() => this.newName),
      () => this.showValidationMessage = false);
  }

}
