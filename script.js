const menuBtn = document.querySelector('.navbar')
const scrollBtn = document.querySelector('.scroll-up-btn')
let abertoFechado = false

function openClose() {
    if (abertoFechado === false) {
        menuBtn.classList.add('active')
        abertoFechado = true
    } else {
        menuBtn.classList.remove('active')
        abertoFechado = false
    }
    
}





$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.header').addClass("sticky")
        } else {
            $('.header').removeClass("sticky")
        } if (this.scrollY > 500) {
            scrollBtn.classList.add('show')
        } else {
            scrollBtn.classList.remove('show')
        }
    })
})

scrollBtn.onclick = function() {
    $('html').animate({scrollTop: 0})
    
}


var typed = new Typed('.typing', {
    strings: ['Programador Junior', 'Freelancer' ,'Dev'],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})