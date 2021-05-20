'use strict';

const btnCommunity = document.querySelector(".nav__box--3");
const btnRetail = document.querySelector(".nav__box--2");
const btnFood = document.querySelector(".nav__box--1")
const section3 =document.querySelector(".main__third");
const section2 =document.querySelector(".main__second");
const section1 = document.querySelector(".main__first")
const nav = document.querySelector(".header__nav");
const navBar = document.querySelectorAll(".header__nav__box");
const thirdBoxes = document.querySelector(".third__boxes");
const thirdBox = document.querySelectorAll(".third__box");
const slider = document.querySelector(".main__slides");
const slide = document.querySelectorAll(".main__slide");
const btnRight = document.querySelector(".btn__right");


btnFood.addEventListener("click", function(){
    section1.scrollIntoView({behavior:'smooth'});
})








btnCommunity.addEventListener("click", function(){
    section3.scrollIntoView({behavior:'smooth'});
});

btnRetail.addEventListener("click", function(){
    section2.scrollIntoView({behavior:'smooth'});
    
})


const displaySection2 = function(entries,observer){
    const [entry] = entries;
    console.log(entry)
   
    if(!entry.isIntersecting) return;
   else {
       section2.classList.remove("active");

   }
 
    observer.unobserve(section2);
   
    
}
const observerMainSecond = new IntersectionObserver(displaySection2 , {
    root: null,
    threshold:0.15,
})

observerMainSecond.observe(section2)

// nav.addEventListener("mouseover", function(e){
//     const link = e.target;
//     console.log(link)
//     const siblings = link.closest(".header__nav").querySelectorAll("h3");
//     const final = link.querySelector("h3")
//    siblings.forEach(function(s){
//        if (s !== final){
//        s.style.opacity = 0.4;}
//    });

// })








nav.addEventListener("mouseover", function(e){
    const link = e.target;
    // console.log(e.target)
    // console.log(link);
    if (!link.classList.contains("h3")) return;
   
    const siblings = link.closest('.header__nav').querySelectorAll("h3");
    siblings.forEach(function(el){
        if (el !== link) el.style.opacity = 0.4;
    })
})
    // siblings.forEach(function(el){
    //     if (el !== link) el.style.opacity = 0.4;
    // })

nav.addEventListener("mouseout", function(e){
    const link = e.target;
    // console.log(e.target)
    if (!link.classList.contains("h3")) return;
   
    const siblings = link.closest('.header__nav').querySelectorAll("h3")
    siblings.forEach(function(el){
        if (el !== link) el.style.opacity = 1;
    })

})


//////////////////////////////////////////////////////////////////
console.log(thirdBox)

const displaySection3 = function(entries, observer){
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) return;
    else {
    const allboxes =entry.target.closest(".third__boxes").querySelectorAll(".third__box")
    allboxes.forEach(function(box){
        box.classList.remove("active2")
    })
   
}};

const observerMainThird = new IntersectionObserver(displaySection3, {
    root:null,
    threshold:0,
});

thirdBox.forEach(function(box){
    observerMainThird.observe(box);
    console.log(box);
});


////const allSections = document.querySelectorAll(".section")

// const revealSection = function(entries, observer){
//     const [entry] = entries;
//     if(!entry.isIntersecting) return;
  
//     entry.target.classList.remove("section--hidden");
//     observer.unobserve(entry.target);
  
//   };
  
//   const sectionObserver = new IntersectionObserver(revealSection, {
//     root:null,
//     threshold:0.15,
//   });
  
  
//   allSections.forEach(function(section) {
//     sectionObserver.observe(section);
//     section.classList.add("section--hidden")
//   })
  




// const handleHover = function(e,opacity){
 
//     if (e.target.classList.contains("nav__link")){
//       const link = e.target;
//       const siblings = link.closest(".nav").querySelectorAll(".nav__link");
//       const logo = link.closest(".nav").querySelector("img");
  
//       siblings.forEach(function(el){
//         if (el !== link) el.style.opacity = opacity;
//       });
//       logo.style.opacity=opacity;
//     }
//   }
  
  
//   nav.addEventListener("mouseover", function(e) {
//     handleHover(e, 0.5)
//   });
//   nav.addEventListener("mouseout", function(e) {
//     handleHover(e, 1)
//   });
slide.forEach(function(s,i){
    // s.style.transform = 'scale(0.1)'
    s.style.transform = `translate(${100*i}%)`
  });


let curSlide = 0;
const maxSlide = slide.length;
console.log(maxSlide);
//cur 0 -> 1 -> 2 -> 3
//max 1->2->3->4
  btnRight.addEventListener("click", function(e){
      e.preventDefault();
      
      ////1,2,3,4
      if (curSlide === maxSlide-1){
      curSlide = 0;}
      else{
        
        slide.forEach(function(s,i){
            curSlide++; 

            s.style.transform = `translate(${100*(i - curSlide+)}%)`
          });
          //now 0, 100 200, 300
          // -100, 0, 100, 200
          //i = 0, 1, 2, 3
          //c = 1.2.3.4      
        }
  });