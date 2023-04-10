export const sapa = (nama) => {
  // console.log(`halo selamat pagi, ${nama}`)
  return `Halo selamat pagi, ${nama}`;
};
// sapa('Abduh')

export const convert = (nama, domisili, umur) => {
  let result = {
    nama,
    domisili,
    umur,
  };
  return result;
};

export const checkScore = (stringData) => {
  let result = {};
  let divide = stringData.split(",");
  for (let i = 0; i < divide.length; i++) {
    let splitted = divide[i].split(":");
    result[splitted[0]] = splitted[1];
  }
  const { score } = result;
  result.score = parseInt(score);
  return result;
};
