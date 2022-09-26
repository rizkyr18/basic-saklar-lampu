function saklar() {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    // id default-toggle merupakan id yang ada di dalam input pada tag label index.html
    // meggunakan let agar nilai dari variabel dapat diubah, jika pakai const nilai tidak dapat diubah
    // untuk melihat apa yang terjadi, click inspect pada live server/browser. jika berfungsi maka akan muncul testing beserta tag input

    // bisa menggunakan
    // toggle.checked ? alert('nyala') : alert('mati');
    // jika toggle on maka akan muncul nyala, jika toggle off maka akan muncul mati
    // recomend untuk validasi dalam 2 kondisi tapi gunakan yang dibawah dulu untuk belajar

    // atau menggunakan ini
    if (toggle1.checked) {
        lampu1.src = "assets/images/on.jpg";
    } else {
        lampu1.src = "assets/images/off.jpg";
    }

    if (toggle2.checked) {
        lampu2.src = "assets/images/on.jpg";
    } else {
        lampu2.src = "assets/images/off.jpg";
    }
    if (toggle3.checked) {
        lampu3.src = "assets/images/on.jpg";
    } else {
        lampu3.src = "assets/images/off.jpg";
    }
}
    // jika true maka dinyalakan jika false maka dimatikan

    // bisa juga mneggunakan ini tapi tidak disarankan
    // console.log('testing', toggle.checked);
    // .checked agar bisa membuat validasi
    // saat mengklik toggle akan muncul true/false pada inspect

    

    //pengkondisian
    // if (action == "on") {
    //     // jika action = on
    //     if (lamp == 1) {
    //         lampu1.src = "assets/images/on.jpg";
    //     }
    //     // jika lampu 1 on maka arahkan ke src lampu on.jpg
    //     if (lamp == 2) {
    //         lampu2.src = "assets/images/on.jpg";
    //     }
    //     // jika lampu 2 on maka arahkan ke src lampu on.jpg
    //     if (lamp == 3) {
    //         lampu3.src = "assets/images/on.jpg";
    //     }
    //     // jika lampu 3 on maka arahkan ke src lampu on.jpg
    // }
    // if (action == "off") {
    //     // jika action = off
    //     if (lamp == 1) {
    //         lampu1.src = "assets/images/off.jpg";
    //     }
    //     // jika lampu 1 off maka arahkan ke src lampu on.jpg
    //     if (lamp == 2) {
    //         lampu2.src = "assets/images/off.jpg";
    //     }
    //     // jika lampu 2 off maka arahkan ke src lampu on.jpg
    //     if (lamp == 3) {
    //         lampu3.src = "assets/images/off.jpg";
    //     }
    // }
        // jika lampu 3 off maka arahkan ke src lampu on.jpg

    // return lampu1;
    //jangan lupa mereturn,yang direturn dari function ini adalah si lampu1. 
    //karena sudah masuk validasi lampunya, nilai lampu akan berubah sesuai validasi diatas (pengkondisian)