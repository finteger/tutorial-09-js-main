//array literal
var array = [3, 4, 7, 9, 10, 32, 45, 64, 87];

//sort the array in ascending order
var array_sorted = array.sort((a, b) => a - b);

console.log(array_sorted);

array_sorted.reverse();

//push method adds to the end of an array
array.push(70);
console.log(array);

//pop will remove an item from the end of an array
array.pop();
console.log(array);

//check to see if a number is present in the array
array.some(num => num === 10); //true

//check to see if all numbers meet a certain condition
array.every(num => num < 100); //true

//reduce method
console.log(array.reduce((a, b) => a + b));

//join existing array with another array
array2 = [110, 120, 130, 200];

console.log(array.concat(array2));

//how do we join array items according to a specific delimiter
let words = ["hello", "world", "!"];
let sentence = words.join(" ");
console.log(sentence);











