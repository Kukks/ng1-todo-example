export class Reflection {

  static getPropertyName(propertyFunction) {
    return /\.([^\.;]+);?\s*\}$/.exec(propertyFunction.toString())[1];
  }

  static getPropertiesOfObject(object) {
    let result = [];
    if (typeof object === "object") {
      for (let i in object) {
        result.push(i);
      }
    }
    return result;
  }
}