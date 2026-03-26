// // 1
// document.write(new Date());

// // 2
// var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// var now = new Date();
// alert(months[now.getMonth()]);

// // 3
// var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// alert(days[now.getDay()]);

// // 4
// if (now.getDay() === 0 || now.getDay() === 6) {
//   alert("It's Fun day");
// }

// // 5
// if (now.getDate() < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }

// // 6
// var minutes = new Date().getTime() / (1000 * 60);
// console.log(minutes);

// // 7
// if (now.getHours() < 12) {
//   alert("Its AM");
// } else {
//   alert("Its PM");
// }

// // 8
// var laterDate = new Date(2020, 11, 31);
// console.log(laterDate);

// // 9
// var ramadan = new Date("June 18, 2015");
// var diff = now - ramadan;
// var daysPassed = Math.floor(diff / (1000*60*60*24));
// alert(daysPassed);

// // 10
// var ref = new Date(2015, 0, 1);
// var seconds = (ref - new Date(1970,0,1)) / 1000;
// console.log(seconds);

// // 11
// var d = new Date();
// d.setHours(d.getHours() + 1);
// console.log(d);

// // 12
// var oldDate = new Date();
// oldDate.setFullYear(oldDate.getFullYear() - 100);
// alert(oldDate);

// // 13
// var age = prompt("Enter age");
// var year = new Date().getFullYear() - age;
// document.write("Birth year: " + year);

// 14 (K-Electric Bill)
// var name = "Zain";
// var month = "March";
// var units = 300;
// var perUnit = 20;
// var net = units * perUnit;
// var late = 500;
// var gross = net + late;

// document.write(`
// Customer: ${name} <br>
// Month: ${month} <br>
// Units: ${units} <br>
// Per Unit: ${perUnit} <br>
// Net: ${net.toFixed(2)} <br>
// Late: ${late.toFixed(2)} <br>
// Gross: ${gross.toFixed(2)}
// `);