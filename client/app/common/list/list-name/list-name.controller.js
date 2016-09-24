export default class ListNameController {
  constructor() {
    this.reset();
  }

  reset() {
    this.nameEditMode = false;
    this.newName = this.name;
  }

  editName() {
    this.nameEditMode = true;
    this.newName = this.name;
  }

  cancelNameEdit() {
    this.reset();
  }

  submitNameChange() {
    this.name = this.newName;
    this.reset();
    this.onNameChange({name: this.name});
  }
}
