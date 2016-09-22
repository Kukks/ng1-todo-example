export default class ListController {
  constructor() {
    this.name = 'test list';
    this.listItems = [];
    this.nameEditMode = false;
    this.newName = '';
  }

  editName() {
    this.nameEditMode = true;
    this.newName = this.name;
  }

  cancelNameEdit() {
    this.nameEditMode = false;
    this.newName = this.name;
  }


}