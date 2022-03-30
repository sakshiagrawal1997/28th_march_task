var str = "sakshi";
let array = str.split("");
let first = array[0];
let last = array[array.length - 1];
array[0] = last;
array[array.length-1] = first;
const str1 = array.join("");
console.log(str1)