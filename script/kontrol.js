// KONTAK YANG DIPOJOK KANAN BAWAH
$('#kontak img').click(function (e) { 
    e.preventDefault();
    $('#kontak .nomer').toggleClass('show');
});



// BUAT SMOOTH SCROLLL
$('.kePasir').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#pasir').offset().top
    }, 500);
});
$('.keKendaraan').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#kendaraan').offset().top
    }, 500);
});
$('.keHome').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 500);
});




// KONTROL ANIMASI ELEMEN YANG SEDANG TAMPIL
var teks_p_header = $('header p')[0].innerText;
var new_teks_p_header = '';

for (let i = 0; i < teks_p_header.length; i++) {
    const e = teks_p_header[i];
    new_teks_p_header += '<h>'+e+'</h>';
}



// console.log(teks_p_header)
// console.log(new_teks_p_header)




$(document).ready(function () {

    // nav muncul
    setTimeout(() => {
        $('nav').addClass('show');
    }, 3500);

    // ini jeda animasi buat kata BINTANG JAYA PASIR
    setTimeout(() => {
        $('header k1').addClass('show');
    }, 500);
    setTimeout(() => {
        $('header k2').addClass('show');
    }, 800);
    setTimeout(() => {
        $('header k3').addClass('show');
    }, 1000);


    // ini buat paragraph di header muncul per huruf
    $('header p')[0].innerHTML = new_teks_p_header
    setTimeout(() => {
        var tunggu_per_huruf = 0
        for (const e of $('h')) {
            setTimeout(() => {
                e.classList.add('show')
            }, tunggu_per_huruf);
            tunggu_per_huruf += 50;
        }
    }, 1000);



    // ini buat tombol di header
    setTimeout(() => {
        $('header .tombol .kePasir').addClass('show');
    }, 2400);
    setTimeout(() => {
        $('header .tombol .keKendaraan').addClass('show');
    }, 2600);


    
    // munculin kontak
    setTimeout(() => {
        $('#kontak').addClass('show');
    }, 2400);
});





var pos_pasir = $('#pasir').offset().top;
var tinggi_pasir = $('#pasir').outerHeight();

var pos_engkel = $('.engkel').offset().top;
var tinggi_engkel = $('.engkel').outerHeight();

var pos_carry = $('.carry').offset().top;
var tinggi_carry = $('.carry').outerHeight();

var pos_truk = $('.truk').offset().top;
var tinggi_truk = $('.truk').outerHeight();


$(window).on('scroll', function () {
    var posnew = $(window).scrollTop();

    // pasir muncul satu satu
    if (pos_pasir - 200 <= posnew && posnew <= pos_pasir + tinggi_pasir - 300) {
        var tunggu_item_pasir = 0
        for (const e of $('.wadah .item')) {
            setTimeout(() => {
                e.classList.add('show')
            }, tunggu_item_pasir);
            tunggu_item_pasir += 500;
        }
    }
    else {
        var tunggu_item_pasir = 0
        for (const e of $('.wadah .item')) {
            setTimeout(() => {
                e.classList.remove('show');
            }, tunggu_item_pasir);
            tunggu_item_pasir += 500;
        }
    }

    // KENDARAAN
    // engkel
    if (pos_engkel - 400 <= posnew && posnew <= pos_engkel + tinggi_engkel - 200) {
        $('.engkel').addClass('show');
    }
    else {
        $('.engkel').removeClass('show');
    }

    // carry
    if (pos_carry - 400 <= posnew && posnew <= pos_carry + tinggi_carry - 200) {
        $('.carry').addClass('show');
    }
    else {
        $('.carry').removeClass('show');
    }

    // truk
    if (pos_truk - 400 <= posnew && posnew <= pos_truk + tinggi_truk - 200) {
        $('.truk').addClass('show');
    }
    else {
        $('.truk').removeClass('show');
    }
    
});

