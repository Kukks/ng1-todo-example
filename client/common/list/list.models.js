export class List {
  constructor(name, listIndex, listItems) {
    this.name = name;
    this.listIndex = listIndex;
    this.listItems = listItems ? listItems : [];
  }
}

export class ListItem {
  constructor(name, state) {
    this.name = name;
    this.state = state ? state : ListItemStates.DEFAULT;
  }
}

export const ListItemStates = {
  PENDING: 0,
  COMPLETED: 1,
  DEFAULT: 0
};
