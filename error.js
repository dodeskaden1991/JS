try {
    throw new RangeError("asdfg");
} catch (error) {
    console.log(error.message);
    console.log(error.name);
    console.error(error.message);
    console.warn(error.name);
    console.info(error.message);
    console.log(error);
    console.log(error.stack);
    console.log(error.toString());
    console.log(error.constructor);
}
console.log("-----------    -----------");
//не е задължително да хвърлям само грешки
function calculate(x, y) {
    if (x < 0 || y < 0) {
      throw "ай вкарай к'вото трябва";
    }
  
    return x + y;
  }
  
  try {
    const result = calculate(-1, -1);
    console.log(result)
  } catch (error) {
    console.log(error); // -1
  } finally {
    console.log("бате аз се изпълнявам винаги \u1455\u6666\u0001");
  }
 