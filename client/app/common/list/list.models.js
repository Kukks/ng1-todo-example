export class List {
  constructor(name, listItems) {
    this.name = name;
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
