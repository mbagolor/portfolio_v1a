document.addEventListener('DOMContentLoaded', function () {
    //TOGGLE NAV
    var mymenubutton = document.querySelector('.menu-button')
    var mytogglemenu = document.querySelector('.toggle-nav')

    mymenubutton.addEventListener('click', function () {
        mytogglemenu.classList.toggle('expanded');
    });
    // ALL JS FUNCTION GO HERE
    console.log('hey melissa!')
});