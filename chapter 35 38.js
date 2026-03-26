// // 1
// function showDate() {
//   document.write(new Date());
// }

// // 2
// function greet(first, last) {
//   alert("Hello " + first + " " + last);
// }

// // 3
// function add(a, b) {
//   return a + b;
// }

// // 4
// function calculator(a, b, op) {
//   if(op === "+") return a + b;
//   if(op === "-") return a - b;
//   if(op === "*") return a * b;
//   if(op === "/") return a / b;
// }

// // 5
// function square(n) {
//   return n * n;
// }

// // 6
// function factorial(n) {
//   var f = 1;
//   for (var i = 1; i <= n; i++) f *= i;
//   return f;
// }

// // 7
// function counting(start, end) {
//   for (var i = start; i <= end; i++) {
//     console.log(i);
//   }
// }

// // 8
// function calculateHypotenuse(base, perp) {
//   function square(x) {
//     return x * x;
//   }
//   return Math.sqrt(square(base) + square(perp));
// }

// // 9
// function area(w, h) {
//   return w * h;
// }

// // 10
// function palindrome(str) {
//   var rev = str.split("").reverse().join("");
//   return str === rev;
// }

// // 11
// function capitalize(str) {
//   return str.split(" ").map(w => w[0].toUpperCase()+w.slice(1)).join(" ");
// }

// // 12
// function longestWord(str) {
//   var words = str.split(" ");
//   return words.sort((a,b)=>b.length-a.length)[0];
// }

// // 13
// function countLetter(str, letter) {
//   return str.split(letter).length - 1;
// }

// // 14
// function calcCircumference(r) {
//   console.log(2 * Math.PI * r);
// }
// function calcArea(r) {
//   console.log(Math.PI * r * r);
// }