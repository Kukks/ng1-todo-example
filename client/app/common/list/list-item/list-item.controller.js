import {ListItem, ListItemStates} from '../list.models';
export default class ListItemController {


  constructor($scope) {
    this.reset();
  }

  reset() {
    this.nameEditMode = this.item ? false : true;
    this.newName = this.item ? this.item.name : 'New Item';
  }

  editName() {
    this.nameEditMode = true;
    this.newName = this.item.name;
  }

  cancelNameEdit() {
    if (this.item) {
      this.nameEditMode = false;
    }
  }

  toggleStateChange() {
    if (this.item) {
      this.item.state = this.item.state === ListItemStates.PENDING ? ListItemStates.COMPLETED : ListItemStates.PENDING;
      this.onSubmit({listItem: this.item});
    }
  }

  submitNameChange() {
    if (this.item) {
      this.item.name = this.newName;
      this.nameEditMode = false;
      this.onSubmit({listItem: this.item});
    } else {
      this.onSubmit({listItem: new ListItem(this.newName)});
    }
    //  delete this.newName;
    this.reset();
  }
}
