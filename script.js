const menuBtn = document.querySelector('.navbar')
const scrollBtn = document.querySelector('.scroll-up-btn')
const menuOpenBtn = document.querySelector('.menu-btn-open')
const menuCloseBtn = document.querySelector('.menu-btn-x')
let abertoFechado = false

function openClose() {
    if (abertoFechado === false) {
        menuBtn.classList.add('active')
        menuOpenBtn.classList.add('open')
        menuCloseBtn.classList.add('hidden')
        abertoFechado = true
    } else {
        menuBtn.classList.remove('active')
        menuCloseBtn.classList.remove('hidden')
        menuOpenBtn.classList.remove('open')
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