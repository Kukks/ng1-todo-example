import {Guid} from "../../utils/guid";
export class ListService {

  constructor(storageService) {
    this.storageService = storageService;
    this.lists = [];
    this.listsIndex = [];
    this.getLists();
  }

  getLists(){
    const rawListsIndex = this.storageService.getItem('lists-index');
    if(rawListsIndex){
      this.listsIndex = JSON.parse(rawListsIndex);
      if(this.listsIndex){
        for(let listIndex of this.listsIndex){
          const rawList = this.storageService.getItem(listIndex);
          this.lists.push(JSON.parse(rawList));
        }
      }
    }
  }

  addNewList(list) {
    const newIndex = Guid.generateGuid();
    this.lists.push(list);
    this.listsIndex.push(newIndex);
    this.storageService.setItem(newIndex,JSON.stringify(list))
    this.storageService.setItem('lists-index',JSON.stringify(this.listsIndex))
  }

  removeList(list, listIndex) {
    const newIndex = Guid.generateGuid();
    this.lists.splice(this.lists.indexOf(list), 1);

    this.listsIndex.splice(this.listsIndex.indexOf(listIndex), 1);
    this.storageService.removeItem(listIndex);
    this.storageService.setItem('lists-index',JSON.stringify(this.listsIndex));
  }

  updateList(list, listIndex) {
    const newIndex = Guid.generateGuid();
    this.lists.splice(this.lists.indexOf(list), 1);
    this.storageService.setItem(listIndex, JSON.stringify(list));
  }
}
