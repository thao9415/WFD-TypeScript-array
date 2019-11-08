const list: number[] = [1, 2, 3];

const categories: Array<string> = ["sport", "IT", "hello"];

console.log("list");
list.forEach( (num) =>
    console.log(num.toFixed(2))
);
console.log("list");
list.forEach( (num) =>
    console.log(num.toFixed(2))
);


console.log('categories');
categories.forEach((str) =>
    console.log(str.indexOf('a'))
);
const listSquare = list.map(num => num * num);
console.log(listSquare);


// lọc các phần tử thỏa mãn
const result = categories.filter(str1 => str1.length > 2)
console.log(result);

const listSquare1 = list.map(num1 => num1 * num1*num1);
console.log(listSquare1);




// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1));
// Error, Property 'substr' does not exist on type 'number'.

// x[3] = "world";
// // OK, 'string' can be assigned to 'string | number'
// x[5] = 100.25;
// console.log(x[5].toString());
// // OK, 'string' and 'number' both have 'toString'

// x[6] = true; // Error, 'boolean' isn't 'string | number'