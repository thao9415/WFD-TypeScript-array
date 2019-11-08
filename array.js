var list = [1, 2, 3];
var categories = ["sport", "IT", "hello"];
console.log("list");
list.forEach(function (num) {
    return console.log(num.toFixed(2));
});
console.log("list");
list.forEach(function (num) {
    return console.log(num.toFixed(2));
});
console.log('categories');
categories.forEach(function (str) {
    return console.log(str.indexOf('a'));
});
var listSquare = list.map(function (num) { return num * num; });
console.log(listSquare);
// lọc các phần tử thỏa mãn
var result = categories.filter(function (str1) { return str1.length > 2; });
console.log(result);
var listSquare1 = list.map(function (num1) { return num1 * num1 * num1; });
console.log(listSquare1);
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log(x[0].substr(2)); // OK
// console.log(x[1].substr(1));
// Error, Property 'substr' does not exist on type 'number'.
// x[3] = "world";
// // OK, 'string' can be assigned to 'string | number'
// x[5] = 100.25;
// console.log(x[5].toString());
// // OK, 'string' and 'number' both have 'toString'
//
// // x[6] = true; // Error, 'boolean' isn't 'string | number'
