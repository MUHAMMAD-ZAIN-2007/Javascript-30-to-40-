// // 1
// function power(a, b) {
//   return Math.pow(a, b);
// }

// // 2
// function isLeap(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

// // 3
// function calcS(a,b,c) {
//   return (a+b+c)/2;
// }
// function triangleArea(a,b,c) {
//   var S = calcS(a,b,c);
//   return Math.sqrt(S*(S-a)*(S-b)*(S-c));
// }

// // 4
// function average(a,b,c) {
//   return (a+b+c)/3;
// }
// function percentage(a,b,c) {
//   return ((a+b+c)/300)*100;
// }
// function mainFunction(a,b,c) {
//   console.log(average(a,b,c));
//   console.log(percentage(a,b,c));
// }

// // 5
// function myIndexOf(str, ch) {
//   for (var i=0; i<str.length; i++) {
//     if (str[i] === ch) return i;
//   }
//   return -1;
// }

// // 7
// function countDoubleVowels(str) {
//   var count = 0;
//   for (var i=0; i<str.length-1; i++) {
//     var pair = str[i] + str[i+1];
//     switch(pair) {
//       case "ea":
//       case "ui":
//       case "oo":
//         count++;
//     }
//   }
//   return count;
// }

// // 8
// function toMeters(km){ return km*1000; }
// function toFeet(km){ return km*3280.84; }
// function toInches(km){ return km*39370.1; }
// function toCM(km){ return km*100000; }

// // 9
// function overtime(hours) {
//   if(hours > 40) return (hours-40)*12;
//   return 0;
// }

// // 10
// function currency(amount) {
//   var hundreds = Math.floor(amount/100);
//   var fifties = Math.floor((amount%100)/50);
//   var tens = Math.floor((amount%50)/10);

//   console.log("100: " + hundreds);
//   console.log("50: " + fifties);
//   console.log("10: " + tens);
// }