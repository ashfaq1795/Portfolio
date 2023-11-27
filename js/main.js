// let nav =document.querySelector(".navbar");
// window.onscroll = function(){
//     if(document.documentElement.scrollTop > 20){
//         nav.classList.add('header-scrolled');
//     } else {
//         nav.classList.remove('header-scrolled');
//     }
// }


$(document).ready(function() {
    var nav = $(".navbar");

    $(window).scroll(function() {
        if ($(document).scrollTop() > 20) {
            nav.addClass('header-scrolled');
        } else {
            nav.removeClass('header-scrolled');
        }
    });
});


//click on navlink close sidebar.
let navLinks= document.querySelectorAll('.nav-link');
let collapseButton = document.querySelector('.navbar-collapse');
navLinks.forEach(a => {
    a.addEventListener('click', function(){
        collapseButton.classList.remove('show');
    })
    
});

