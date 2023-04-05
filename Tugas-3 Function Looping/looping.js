let i = 0;
while(i < 20){
    i+=2;
    console.log(i, "- I love coding");
}
while(i >= 2){
    console.log(i, "- I will become a mobile developer");
    i-=2;
}

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i, " - Berkualitas");
    }else if(i % 3 == 0){
        console.log(i, " - I Love coding");
    }else{
        console.log(i, " - Santai");
    }
}

function makeRectangle(panjang, lebar) {
  let string = "";
  for (let i = 0; i < lebar; i++) {
    for (let j = 0; j < panjang; j++) {
      string += "#";
    }
    string += "\n";
  }
  console.log(string);
}
// TEST CASE

makeRectangle(8, 4);

function makeLadder(sisi) {
  let string = "";
  for (let i = 1; i <= sisi; i++) {
    for (let j = 0; j < i; j++) {
      string += "#";
    }
    string += "\n";
  }
  console.log(string);
}

// TEST CASE
makeLadder(7);
