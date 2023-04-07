let input = [["Abduh", "Muhamad", "male", 1992], ["Ahmad", "Taufik", "male", 1985]]
var now = new Date()
var thisYear = now.getFullYear() // 2020 (tahun sekarang)

function arrayToObject(input){
    for(let i = 0; i < input.length; i++){
        let objectName = input[i][0] + " " + input[i][1];
        let valueObject = {};
        valueObject.firstName = input[i][0];
        valueObject.lastName = input[i][1];
        valueObject.gender = input[i][2];
        if(input[i][3] == undefined || input[i][3] >= thisYear){
            valueObject.age = 'Invalid birth year';
        }else{
            valueObject.age = thisYear - input[i][3];
        }
        console.log(objectName, " : ", valueObject);
    };
}

arrayToObject(input)
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
// Error case 
arrayToObject([]) // ""

function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let result = [];
    for (let i = 0; i < arrPenumpang.length; i++) {
        let object = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1])) * 2000,
        };
        result.push(object);
    };
    return result;
  }
   
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
   
  console.log(naikAngkot([])); //[]

  function nilaiTertinggi(siswa) {
    // Code disini
    let result = {};
    for (let i = 0; i < siswa.length; i++) {
            result[siswa[i].class] = {
                name: siswa[i].name,
                score: siswa[i].score,
            }
    }
    return result;
  }
  
  // TEST CASE
  console.log(nilaiTertinggi([
    {
      name: 'Asep',
      score: 90,
      class: 'adonis'
    },
    {
      name: 'Ahmad',
      score: 85,
      class: 'vuejs'
    },
    {
      name: 'Regi',
      score: 74,
      class: 'adonis'
    },
    {
      name: 'Afrida',
      score: 78,
      class: 'reactjs'
    }
  ]));
  
  // OUTPUT:
  
  // {
  //   adonis: { name: 'Asep', score: 90 },
  //   vuejs: { name: 'Ahmad', score: 85 },
  //   reactjs: { name: 'Afrida', score: 78}
  // }
  
  
  console.log(nilaiTertinggi([
    {
      name: 'Bondra',
      score: 100,
      class: 'adonis'
    },
    {
      name: 'Putri',
      score: 76,
      class: 'laravel'
    },
    {
      name: 'Iqbal',
      score: 92,
      class: 'adonis'
    },
    {
      name: 'Tyar',
      score: 71,
      class: 'laravel'
    },
    {
      name: 'Hilmy',
      score: 80,
      class: 'vuejs'
    }
  ]));
  
  // {
  //   adonis: { name: 'Bondra', score: 100 },
  //   laravel: { name: 'Putri', score: 76 },
  //   vuejs: { name: 'Hilmy', score: 80 }
  // }