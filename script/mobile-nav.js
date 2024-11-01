$('#menu').click(function () {
    $('nav .box').toggleClass('show');
});

$(document).click(function (e) { 
    var navbox = $('nav .box')[0];
    var menu = $('#menu')[0];
    if (e.target != menu && e.target != navbox) {
    // if (e.target != navbox || e.target.parentElement != navbox) {
            if (navbox.classList.contains('show')) {
                $('nav .box').removeClass('show');
            }
        // }
    }
    // console.log(navbox)
    // console.log(e.target.parentElement)
});