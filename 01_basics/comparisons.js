// 2 different datatypes are never to be compared otherwise result is mostly unpredictable
// for eg:
// => : sign for conversion
console.log("2" > 1); //2 => Number
console.log("02" > 1);

console.log(null > 0); // >,<,>=,<= they convert null to number
console.log(null >= 0);
console.log(null == 0); // it does not 

//similarly
// undefined => NaN & gives all values false
console.log(undefined > 0); // >,<,>=,<= they convert null to number
console.log(undefined < 0); 
console.log(undefined == 0);

// === it checks the value + datatype for eg:
console.log(2 === "2"); // false

