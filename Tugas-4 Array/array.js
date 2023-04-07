//contoh input
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

function dataHandling(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < 5; j++) {
      switch (j) {
        case 0:
          console.log("Nomor ID : ", input[i][j]);
          break;
        case 1:
          console.log("Nama Lengkap : ", input[i][j]);
          break;
        case 2:
          console.log("TTL : ", input[i][j]);
          break;
        case 3:
          console.log(input[i][j]);
          break;
        default:
          break;
      }
    }
  }
}

dataHandling(input);

function balikKata(kata) {
  let result = "";
  for (let i = kata.length-1; i >= 0; i--) {
    result += kata[i];
  }
  return result;
}
console.log(balikKata("Sanbercode"));
console.log(balikKata("racecar")) 
console.log(balikKata("kasur rusak"))
console.log(balikKata("haji ijah"))
console.log(balikKata("I am Sanbers"))
