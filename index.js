'use strict';

const btnCommunity = document.querySelector(".nav__box--3");
const btnRetail = document.querySelector(".nav__box--2");
const btnFood = document.querySelector(".nav__box--1")
const section3 =document.querySelector(".main__third");
const section2 =document.querySelector(".main__second");
const section4 = document.querySelector(".main__fourth")
const section5 = document.querySelector(".main__fifth")
const nav = document.querySelector(".header__nav");
const navBar = document.querySelectorAll(".header__nav__box");
const thirdBoxes = document.querySelector(".third__boxes");
const thirdBox = document.querySelectorAll(".third__box");
const slider = document.querySelector(".main__slides");
const slide = document.querySelectorAll(".main__slide");
const btnRight = document.querySelector(".btn__right");
const btnLeft = document.querySelector(".btn__left");
const dotContainer = document.querySelector(".dots");
const sixthBoxAddress =document.querySelector(".six_box-address");
const sixthBoxModal = document.querySelector(".sixth__modal");
const sixthModalClose = document.querySelector(".sixth__modal--x");


btnFood.addEventListener("click", function(){
    section5.scrollIntoView({behavior:'smooth'});
})

btnCommunity.addEventListener("click", function(){
    section3.scrollIntoView({behavior:'smooth'});
});

btnRetail.addEventListener("click", function(){
    section4.scrollIntoView({behavior:'smooth'});
    
})


const displaySection2 = function(entries,observer){
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    else {
       section2.classList.remove("active");
    }
    observer.unobserve(section2);
};

const observerMainSecond = new IntersectionObserver(displaySection2 , {
    root: null,
    threshold:0.15,
})

observerMainSecond.observe(section2);

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


const displaySlide = function(entries,observer){
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    else {
        slider.classList.remove("main__slides--active");
    }

    };



const observerSlide = new IntersectionObserver(displaySlide, {
    root:null,
    threshold:0,
})

observerSlide.observe(slider)

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

const goToSlide = function(slid){
    slide.forEach(function(s,i){
        // s.style.transform = 'scale(0.1)'
        s.style.transform = `translateX(${100*(i - slid)}%)`
      });
};



let curSlide = 0;
const maxSlide = slide.length;
console.log(maxSlide);
//cur 0 -> 1 -> 2 -> 3
//max 1->2->3->4
const nextSlide = function(e){
    e.preventDefault();
    if (curSlide === maxSlide-1){
    curSlide = 0;}
    else{
      curSlide++; }
  goToSlide(curSlide);
  activateDot(curSlide);

};


const prevSlide = function(e){
    e.preventDefault();
    //Currrenet slide should do decrease
    if (curSlide === 0){
        curSlide = maxSlide-1;}
        else{
          curSlide--; }
          goToSlide(curSlide);
          activateDot(curSlide);

};




  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);


document.addEventListener("keydown", function(e){
      if (e.key ==='ArrowLeft') {
        if (curSlide === 0){
            curSlide = maxSlide-1;}
            else{
              curSlide--; }
              goToSlide(curSlide);
              activateDot(curSlide);

} else if (e.key ==='ArrowRight') {
if (curSlide === maxSlide-1){
    curSlide = 0;}
    else{
      curSlide++; }
  goToSlide(curSlide);
  activateDot(curSlide);}

})





const createDots = function(){
    slide.forEach(function(s,i){
        dotContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`)
    })
}

const activateDot = function(slide){
    document.querySelectorAll(".dots__dot").forEach(dot => dot.classList.remove("dots__dot--active"));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
};




dotContainer.addEventListener("click", function(e){
    if(e.target.classList.contains("dots__dot"))
    {   const slide = e.target.dataset.slide;
        console.log(slide);
        goToSlide(slide);
        activateDot(slide);
    }
});


const init = function(){
    createDots();
    activateDot(0);
goToSlide(0);
}
init();




const map = L.map('six__map').setView([40.7189145, -74.0011228], 20);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([40.7189145, -74.0011228]).addTo(map)
    .bindPopup(L.popup({maxWidth: 250, minWidth:100, autoClose:false, className: 'customPopup'}))
    .setPopupContent('Canal Street Market')
    .openPopup();


    // L.marker(workout.coords)
    // .addTo(this.#map)
    // .bindPopup(L.popup({
    //     maxWidth : 250, minWidth:100, autoClose:false, closeOnClick: false, className:`${workout.type}-popup`}))
    // .setPopupContent(`${workout.type === 'running' ? '🏃' : '🚴‍♀️'}${workout.description}`)
    // .openPopup();



    sixthBoxAddress.addEventListener("click", function(){
        sixthBoxModal.classList.remove("hidden__modal");
    })


    sixthModalClose.addEventListener("click", function(){
        sixthBoxModal.classList.add("hidden__modal");
    })

    document.addEventListener("keydown",function(e){
        if(e.key==="Escape") {
            sixthBoxModal.style.opacity = 0;
        }
    })