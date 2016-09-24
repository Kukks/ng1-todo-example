export default class ListController {

  constructor(storageService, listService) {
  //  this.storageService = storageService;
    this.listService = listService;
    // this.name = this.list.name;
    this.filteredItems = [];
    this.listItems = this.list.listItems;
    this.currentFilter = null;
  }

  applyFilter(filter) {
    this.currentFilter = filter;
    this.updateFilteredItemsList();
  }

  updateFilteredItemsList() {
    this.filteredItems = this.listItems
      .filter((item) => (this.currentFilter === null || this.currentFilter === item.state))
      .sort((listItem1, listItem2)=> listItem1.state > listItem2.state ? 1 : -1);
  }

  applyNameChange(name) {
    this.list.name = name;
    this.saveToStorage();
  }

  removeListItem(listItem) {
    const indexToRemove = this.listItems.indexOf(listItem);
    if (indexToRemove >= 0) {
      this.listItems.splice(indexToRemove, 1);
      this.updateFilteredItemsList();
      this.saveToStorage();
    }
  }

  saveToStorage() {
    this.listService.updateList(this.list, this.list.listIndex);
  }

  addListItem(listItem) {
    this.listItems.push(listItem);
    this.updateFilteredItemsList();
    this.saveToStorage();
  }

  updateListItem(listItem) {
    this.updateFilteredItemsList();
  }
  removeList(){
    this.listService.removeList(this.list);
  }

}
