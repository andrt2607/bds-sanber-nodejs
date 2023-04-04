//Soal no 1
let nama = "John";
let peran = "";
if(nama == '' && peran == ''){
    console.log('Nama harus diisi');
}else if(nama == 'John' && peran == ''){
    console.log('Halo John, Pilih peranmu untuk memulai game!');
}else if(nama == 'Jane' && peran == 'Penyihir'){
    console.log('Selamat datang di Dunia Werewolf, Jane\n'+"Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!");
}else if(nama == 'Jenita' && peran == 'Guard'){
    console.log('Selamat datang di Dunia Werewolf, Jenita\n'+'Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.');
}else if(nama == 'Junaedi' && peran == 'Werewolf'){
    console.log('Selamat datang di Dunia Werewolf, Junaedi\n'+'Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!');
}

//SOal no 2
let hari = 21;
let bulan = 1;
let tahun = 1945;
switch (bulan) {
    case 1:
        bulan = 'Januari';
        break;
    case 2:
        bulan = 'Februari';
        break;
    case 3:
        bulan = 'Maret';
        break;
    case 4:
        bulan = 'April';
        break;
    case 5:
        bulan = 'Mei';
        break;
    case 6:
        bulan = 'Juni';
        break;
    case 7:
        bulan = 'Juli';
        break;
    case 8:
        bulan = 'Agustus';
        break;
    case 9:
        bulan = 'September';
        break;
    case 10:
        bulan = 'Oktober';
        break;
    case 11:
        bulan = 'Nopember';
        break;
    case 12:
        bulan = 'Desember';
        break;
    default:
        break;
}
console.log(hari + " " + bulan + " " + tahun);