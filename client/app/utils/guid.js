export class Guid {
  static generateGuid() {
    return Guid.s4() + Guid.s4() + '-' + Guid.s4() + '-' + Guid.s4() + '-' +
      Guid.s4() + '-' + Guid.s4() + Guid.s4() + Guid.s4();
  }

  static s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}