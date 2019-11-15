export class Helper {


  // get the default value of a type,  according to https://developers.google.com/protocol-buffers/docs/proto3#default
  static defaultForType(type) {
    switch (type) {
      case "string":
      case "bytes":
        return "";
      case "bool":
        return false;
      case "float":
      case "double":
      case "int32":
      case "int64":
      case "uint32":
      case "uint64":
      case "sint32":
      case "sint64":
      case "fixed32":
      case "fixed64":
      case "sfixed32":
      case "sfixed64":
        return 0;
      default:
        return undefined;
    }

  }

  /**
   * checks if a type is numeric (usefull when you want to compare min or max constraints)
   * @param type
   * @return {boolean}
   */
  static isNumericType(type) {
    switch (type) {
      case "string":
      case "bytes":
      case "bool":
        return false;
      case "float":
      case "double":
      case "int32":
      case "int64":
      case "uint32":
      case "uint64":
      case "sint32":
      case "sint64":
      case "fixed32":
      case "fixed64":
      case "sfixed32":
      case "sfixed64":
        return true;
      default:
        return false;
    }
  }
}
