// greeting function

function greeting(param) {
  return `halo ${param}`;
}

const andre = greeting("andre");

// substraction function

function substraction(param1, param2) {
  const result = param1 - param2;
  return result;
}

const numbers = substraction(8, 2);

// string length checker

function stringLengthChecker(param) {
  const checker = param.length;

  return checker;
}

const test = stringLengthChecker("binar");

// average function

function average(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10) {
  const averageCount =
    (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) / arguments.length;
  return averageCount;
}

const grades = average(10, 10, 10, 10, 10, 10, 10, 10, 10, 10);

// data type checker

function dataTypeChecker(param) {
  let dataChecker = typeof param;
  return dataChecker;
}

const data = dataTypeChecker(1);

// conditional

// let smart = true;
// let pretty = false;
// let sameReligion = true;

// if (smart === true && sameReligion === true) {
//   console.log("Jadi Nikah");
// } else {
//   console.log("Gajadi Nikah");
// }

//  soal 2

// const year = "kamu nanyea";
// if (year < 1945) {
//   console.log("Masih Dijajah");
// } else if (year >= 1945) {
//   console.log("Sudah Merdeka");
// } else {
//   console.log("Tidak Diketahui");
// }

// soal 3 kalau nilai diatas 80, nilai excellent, kalau nilai 60-80 good job, kalau nilai mulai dari 50-59 maka kamu ngulang, selebihnya tidak naik kelas

const nilai = 50;

if (nilai > 80) {
  console.log("Excellent!");
} else if (nilai >= 60 && nilai <= 80) {
  console.log("Good Job!");
} else if (nilai >= 50 && nilai <= 59) {
  console.log("Kamu Ngulang!");
} else {
  console.log("Kamu Tidak Naik Kelas!");
}
