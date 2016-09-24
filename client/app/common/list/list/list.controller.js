export default class ListController {

  constructor(storageService, listService) {
  //  this.storageService = storageService;
    this.listService = listService;
    this.name = this.list.name;
    this.filteredItems = [];
    this.listItems = this.list.listItems;
    this.subscriptionKey = null;
    this.enabledFilter = null;
 //   this.subscribeToListStorageChange();
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

  submitListNameChange(name) {
    this.list.name = name;
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
    this.listService.updateList(this.list, this.list.listIndex);
  }



  onCreateListItem(listItem) {
    this.addItem(listItem);
  }

  onUpdateListItem(listItem) {
    this.updateFilteredItemsList();
  }
  remove(){
    this.listService.removeList(this.list);
  }

}
