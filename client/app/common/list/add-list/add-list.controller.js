import {List} from "../list.models";
export default class AddListController {
  constructor(listService) {
    this.listService = listService;
    this.reset();
  }

  createList() {
    this.listService.addNewList(new List(this.name));
    this.reset();

  }

  reset(){
    this.name = "";
  }
}
