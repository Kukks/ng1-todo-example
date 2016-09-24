import {Guid} from "../../utils/guid";
export class ListService {

  constructor(storageService) {
    this.storageService = storageService;
    this.lists = [];
    this.listsIndex = [];
    this.getLists();
    this.subscriptionKeys = [];
  }

  getLists() {
    const rawListsIndex = this.storageService.getItem('lists-index');
    if (rawListsIndex) {
      this.listsIndex = JSON.parse(rawListsIndex);
      if (this.listsIndex) {
        for (let listIndex of this.listsIndex) {
          const rawList = this.storageService.getItem(listIndex);
          this.lists.push(JSON.parse(rawList));
        }
      }
    }
  }

  subscribeToListStorageChange() {
    this.storageService.subscribeToChange('lists-index', this.onListIndexChanged.bind(this));
  }

  onListIndexChanged() {
    this.getLists();
  }

  onListStorageChange(change) {
    const newValue = JSON.parse(change.newValue);
    if (newValue && newValue.listIndex) {
      for (let i = 0; i < this.lists.length; i++) {
        if (this.lists[i].listIndex === newValue.listIndex) {
          this.lists[i] = newValue;
          break;
        }
      }
    }
  }

  addNewList(list) {
    const newIndex = Guid.generateGuid();
    list.listIndex = newIndex;
    this.lists.push(list);
    this.listsIndex.push(newIndex);
    this.storageService.setItem(newIndex, JSON.stringify(list));
    this.storageService.setItem('lists-index', JSON.stringify(this.listsIndex));
    this.subscriptionKeys.push(this.storageService.subscribeToChange(newIndex, this.onListStorageChange.bind(this)));
    return newIndex;
  }

  removeList(list) {
    this.listsIndex.splice(this.listsIndex.indexOf(list.listIndex), 1);
    this.storageService.removeItem(list.listIndex);
    this.lists.splice(this.lists.indexOf(list), 1);
    this.storageService.setItem('lists-index', JSON.stringify(this.listsIndex));
  }

  updateList(list, listIndex) {
    this.lists.splice(this.lists.indexOf(list), 1, list);
    this.storageService.setItem(listIndex, JSON.stringify(list));
  }
}
