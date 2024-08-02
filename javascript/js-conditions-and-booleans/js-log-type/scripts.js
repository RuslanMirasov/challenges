let data; /* | null | undefined | 100 | "Some string" | true | 100n | () => {} | [] | {} | */

if (data === null) {
  console.log("null!");
} else {
  switch (typeof data) {
    case "undefined":
      console.log("undefined!");
      break;
    case "number":
      console.log("number!");
      break;
    case "string":
      console.log("string!");
      break;
    case "boolean":
      console.log("boolean!");
      break;
    case "bigint":
      console.log("bigint!");
      break;
    case "function":
      console.log("function!");
      break;
    case "object":
      Array.isArray(data) ? console.log("array!") : console.log("object!");
      break;
    default:
      console.log("I have no idea!");
  }
}
