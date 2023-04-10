import { sapa, convert, checkScore } from "./libs/latihan";

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case "sapa":
    let nama = args[1];
    console.log(sapa(nama));
    break;
  case "convert":
    let namaOrang = args[1];
    let domisili = args[2];
    let umur = args[3];
    console.log(convert(namaOrang, domisili, umur));
    break;
  case "checkScore":
    let stringData = args[1];
    console.log(checkScore(stringData));
    break;
  default:
    break;
}
