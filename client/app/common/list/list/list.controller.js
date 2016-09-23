export default class ListController {

  constructor(storageService, listService) {
    this.storageService = storageService;
    this.listService = listService;
    this.name = this.list.name;
    this.filteredItems = [];
    this.listItems = this.list.listItems;
    this.subscriptionKey = null;
    this.enabledFilter = null;
    this.subscribeToListStorageChange();
  }

  onFilterChanged(filter) {
    this.enabledFilter = filter;
    this.updateFilteredItemsList();
  }

  updateFilteredItemsList() {
    this.filteredItems = this.listItems
      .filter((item) => (this.enabledFilter === null || this.enabledFilter === item.state))
      .sort((listItem1, listItem2)=> listItem1.state > listItem2.state ? 1 : -1);
  }


  editName() {
    this.nameEditMode = true;
    this.newName = this.name;
  }

  cancelNameEdit() {
    this.nameEditMode = false;
    this.newName = this.name;
  }

  submitListNameChange() {
    this.storageService.unsubscribeToChange(this.subscriptionKey);
    this.storageService.removeitem(`list-${this.name}`);

    this.saveToStorage();
  }

  addItem(item) {
    this.listItems.push(item);
    this.updateFilteredItemsList();
    this.saveToStorage();
  }

  removeItem(item) {
    const indexToRemove = this.listItems.indexOf(item);
    if (indexToRemove >= 0) {
      this.listItems.splice(indexToRemove, 1);
      this.updateFilteredItemsList();
      this.saveToStorage();
    }
  }

  saveToStorage() {
    this.listService.updateList(this.list, this.listIndex);
  }

  onListStorageChange(change) {
    const newValue = JSON.parse(change.newValue);
    if (newValue !== this.listItems) {
      this.listItems = newValue;
      this.updateFilteredItemsList();
    }
  }

  onCreateListItem(listItem) {
    this.addItem(listItem);
  }

  onUpdateListItem(listItem) {
    this.updateFilteredItemsList();
  }

  subscribeToListStorageChange() {
    this.subscriptionKey = this.storageService.subscribeToChange(this.listIndex, this.onListStorageChange.bind(this));
  }
}
