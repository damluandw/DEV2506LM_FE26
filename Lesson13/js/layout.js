// var openMenu =false;
// $('#btn-menu').on('click', () => {
//     if (openMenu == true) {
//        $('.navbar-mobile .navbar-nav').hide();
//     } else {
//         $('.navbar-mobile .navbar-nav').show();
//     }
//     openMenu = !openMenu;

// })
//Cách 2
$('#btn-menu').on('click', () => {
    var element = $('.navbar-mobile .navbar-nav')
    if (element.css('display') == 'block') {
       element.hide();
    } else {
        element.show();
    }
})