'use strict';

const btnCommunity = document.querySelector(".nav__box--3");
const btnRetail = document.querySelector(".nav__box--2");
const section3 =document.querySelector(".main__third");
const section2 =document.querySelector(".main__second");


btnCommunity.addEventListener("click", function(){
    section3.scrollIntoView({behavior:'smooth'});
});

btnRetail.addEventListener("click", function(){
    section2.scrollIntoView({behavior:'smooth'});
    
})