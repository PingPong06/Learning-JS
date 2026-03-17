let name = "Darshan";
let value = "33abs";
let isBoolean = false;
let empty = "";
let nullValue = null; 

// console.log(typeof empty); //string
// console.log(typeof name);  // string
// console.log(typeof nullValue); //obj
// console.log(typeof isBoolean); //boolean

//conversions:
let newName = Number(name); 
let newEmpty = Number(empty);
let newNullValue = Number(nullValue);
let newIsBoolean = String(isBoolean);
let boolNull = Boolean(nullValue);

//let's check their values first

// console.log(newName);  // Darshan(string) = NaN(Number)
// console.log(newEmpty);  // ""(string) = 0(Number)
// console.log(newNullValue); // null(object) = 0(Number)
// console.log(newIsBoolean); // false(boolean) = false(string)
// console.log(boolNull);  //  null(object) = false(boolean)
// console.log(String(null)); // null(object) = null(string)
// console.log(String(NaN)); // NaN(Number) = NaN(string)

// // converted Datatypes
// console.log(typeof newName);  //Number
// console.log(typeof NaN); //Number
// console.log(typeof String(null)); //String

// ************************ Operations **********************

console.log("1"+1+1); // concat starts from first string appearance before which it only performs addition
console.log(1+1+"1"); //before string it adds then concats

console.log(+true); // null + true = 0 + 1
console.log(""+true); // 0+1

let num = 100;
console.log(num++); // first prints then increaments
// now num = 100 
console.log(num);

let num2 = 1;
console.log(++num2); // first increament then print