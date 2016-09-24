export default class ListController {
  constructor($stateParams, listService) {
    this.$stateParams = $stateParams;
    this.listService = listService;
    if(this.$stateParams && this.$stateParams.listIndex){
      this.list = this.listService.getList(this.$stateParams.listIndex);
    }
  }
}