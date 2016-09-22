import {Guid} from "../../utils/guid";
export class StorageService {

  constructor() {
    this.subscriptions = {};
    if (this.isLocalStorageSupported()) {
      this.listenToChangeEvent();
    }
  }

  setItem(key, value) {
    window.localStorage.setItem(key, value);
  }

  getItem(key) {
    window.localStorage.getItem(key);
  }

  subscribeToChange(key, handler) {
    const subscriptionId = Guid.generateGuid();
    this.subscriptions[subscriptionId] = ({key: key, handler: handler});
    return subscriptionId;
  }

  unsubscribeToChange(subscriptionId) {
    this.subscriptions[subscriptionId] = null;
  }

  isLocalStorageSupported() {
    return typeof Storage !== "undefined";
  }

  listenToChangeEvent() {
    window.addEventListener('storage', this.onStorageChanged.bind(this))
  }

  onStorageChanged(event) {
    for (let subscription of this.subscriptions) {
      if (subscription.key === event.key && subscription.handler) {
        subscription.handler({newValue: event.newValue, oldValue: event.oldValue});
      }
    }
  }
}