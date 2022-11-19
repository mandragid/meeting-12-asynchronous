// membuat array baru

// const cars = ["agya", "ayla", "cayla", "sigra"];

// mencari panjang sebuah array

// const carsLength = cars.length;

// mengambil data dari sebuah array

// const getData = cars[1];
// const getTwoDatas = cars.slice(1, 3);
// console.log(getData);
// console.log(carsLength);
// console.log(getTwoDatas);

// mengambil data dari sebuah array yang di dalam array

// const secondCars = ["honda", "toyota", "suzuki", ["almaz", "confero", "airev"]];
// const getConfero = secondCars[3][1];
// console.log(getConfero);

// push, pop, shift, unshift

// const secondCars = ["honda", "toyota", "suzuki"];
// secondCars[1] = "isuzu";
// secondCars[2] = "bmw";
// secondCars.unshift();
// console.log(secondCars);

// menggabungkan dua array dengan concat

// const secondCars = ["honda", "toyota", "suzuki"];
// const firstCars = ["audi", "mercy", "volvo"];
// const newArray = firstCars.concat(secondCars);

// // cari object dalam array

// // includes method
// const esemka = firstCars.includes("esemka");
// // indexOf method
// const isEsemka = firstCars.indexOf("audi");
// console.log(esemka);
// console.log(isEsemka);

// array looping
// const bike = ["astrea", "kharisma", "legenda", "rxking"];
// for (let i = 0; i <= 3; i++) console.log(bike[i]);
// const data = [80, 50, 20, 10, 0];
// const result = [];
// for (let i = 0; i <= 4; i++) {
//   if (data[i] > 40) {
//     result.push(data[i]);
//   }
// }
// console.log(result);

// array looping dalam bentuk function

// function numData() {
//   const data = [80, 50, 20, 10, 0];
//   const result = [];
//   for (let i = 0; i <= 4; i++) {
//     if (data[i] > 40) {
//       result.push(data[i]);
//     }
//   }
//   return result;
// }
// console.log(numData());

// array map dan filter untuk mendapatkan data tanpa menggunakan looping
// jika menggunakan map, hasil yang direturn berupa boolean
// jika menggunakan filter, hasil yang direturn berupa data

// const scores = [10, 20, 30, 40];
// const print = scores.map((item) => {
//   return item > 40;
// });
// const cetak = scores.filter(function (items) {
//   return items > 20;
// });
// console.log(cetak);
// console.log(print);

// javascript object

// const me = {
//   name: "andre",
//   parents: ["ivin", "aan"],
//   hobby: ["automotive", "coding", "videography"],
//   address: "tegal",
//   sister: {
//     name: "devina",
//     hobby: "reading",'cooking',
//   },
// };

// console.log(me.sister.hobby);

const me = {
  name: "haki",
  parents: ["devi", "miko"],
  address: "bogor",
  hobby: "coding",
  olderBrother: {
    name: "altaf",
    address: "bogor",
    hobby: ["coding", "sleeping"],
  },
};
me.name = "andre";

console.log(me.parents[1]);

let you = new Object();
you.name = "andre";
you.address = "jakarta";

console.log(you);
