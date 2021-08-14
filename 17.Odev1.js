let girdi = prompt("Adınızı Giriniz :");

let gonder = document.querySelector("#isim");
gonder.innerHTML = `${girdi}`;

// let tarih = new Date();

// let saat = tarih.getHours();
// let dakika = tarih.getMinutes();
// let saniye = tarih.getSeconds();
// let gun = tarih.getDay();



// let sentDate = document.querySelector("#saat");
// sentDate.innerHTML = `${saat} : ${dakika} : ${saniye}`


// let sentGun = document.querySelector("#gun");

// let gunName;

// switch(true){
//     case gun == 1:
//         gunName = "Pazartesi";
//         break;
//     case gun == 2:
//         gunName = "Salı";
//         break;
//     case gun == 3:
//         gunName = "Çarşamba";
//         break;
//     case gun == 4:
//         gunName = "Perşembe";
//         break;
//     case gun == 5:
//         gunName = "Cuma";
//         break;
//     case gun == 6:
//         gunName = "Cumartesi";
//         break;
//     case gun == 7:
//         gunName = "Pazar";
//         break;
//     default:
//         sentGun.innerHTML = "Gun Bulunamadı";
//         break;
// }

// sentGun.innerHTML = `${gunName}`


// Code By Webdevtrick ( https://webdevtrick.com )

function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var d = date.getDay();
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("saat").innerHTML = time;
    document.getElementById("saat").innerHTML = time;

    setTimeout(showTime, 1000);

    sentGun = document.querySelector("#gun");
    

    switch(true){
        case d == 1:
            d = "Pazartesi";
            break;
        case d == 2:
            d = "Salı";
            break;
        case d == 3:
            d = "Çarşamba";
            break;
        case d == 4:
            d = "Perşembe";
            break;
        case d == 5:
            d = "Cuma";
            break;
        case d == 6:
            d = "Cumartesi";
            break;
        case d == 7:
            d = "Pazar";
            break;
        default:
            sentGun.innerHTML = "Gun Bulunamadı";
            break;
    }

    sentGun.innerHTML = d;
    
}
 
showTime();





































