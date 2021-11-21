"use strict";

const btnDevelopment = document.querySelector(".nav__box--3");
const btnData = document.querySelector(".nav__box--2");
const btnAbout = document.querySelector(".nav__box--1");
const mainFirst = document.querySelector(".main__first");
const section3 = document.querySelector(".main__third");
const section2 = document.querySelector(".main__second");
const section4 = document.querySelector(".main__fourth");
const section5 = document.querySelector(".main__fifth");
const nav = document.querySelector(".header__nav");
const navBar = document.querySelectorAll(".header__nav__box");
const thirdBoxes = document.querySelector(".third__boxes");
const thirdBox = document.querySelectorAll(".third__box");
const slider = document.querySelector(".main__slides");
const slide = document.querySelectorAll(".main__slide");
const btnRight = document.querySelector(".btn__right");
const btnLeft = document.querySelector(".btn__left");
const sixthBoxAddress = document.querySelector(".six_box-address");
const sixthBoxModal = document.querySelector(".sixth__modal");
const sixthModalClose = document.querySelector(".sixth__modal--x");

btnAbout.addEventListener("click", function () {
  mainFirst.scrollIntoView({ behavior: "smooth" });
});

btnDevelopment.addEventListener("click", function () {
  section5.scrollIntoView({ behavior: "smooth" });
});

btnData.addEventListener("click", function () {
  section2.scrollIntoView({ behavior: "smooth" });
});

const displaySection2 = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  else {
    section2.classList.remove("active");
  }
  observer.unobserve(section2);
};

const observerMainSecond = new IntersectionObserver(displaySection2, {
  root: null,
  threshold: 0.15,
});

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

nav.addEventListener("mouseover", function (e) {
  const link = e.target;
  // console.log(e.target)
  // console.log(link);
  if (!link.classList.contains("h3")) return;

  const siblings = link.closest(".header__nav").querySelectorAll("h3");
  siblings.forEach(function (el) {
    if (el !== link) el.style.opacity = 0.4;
  });
});
// siblings.forEach(function(el){
//     if (el !== link) el.style.opacity = 0.4;
// })

nav.addEventListener("mouseout", function (e) {
  const link = e.target;
  // console.log(e.target)
  if (!link.classList.contains("h3")) return;

  const siblings = link.closest(".header__nav").querySelectorAll("h3");
  siblings.forEach(function (el) {
    if (el !== link) el.style.opacity = 1;
  });
});

//////////////////////////////////////////////////////////////////
console.log(thirdBox);

const displaySection3 = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  else {
    const allboxes = entry.target
      .closest(".third__boxes")
      .querySelectorAll(".third__box");
    allboxes.forEach(function (box) {
      box.classList.remove("active2");
    });
  }
};

const observerMainThird = new IntersectionObserver(displaySection3, {
  root: null,
  threshold: 0,
});

thirdBox.forEach(function (box) {
  observerMainThird.observe(box);
  console.log(box);
});

const displaySlide = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  else {
    slider.classList.remove("main__slides--active");
  }
};

const observerSlide = new IntersectionObserver(displaySlide, {
  root: null,
  threshold: 0,
});

observerSlide.observe(slider);

const goToSlide = function (slid) {
  slide.forEach(function (s, i) {
    // s.style.transform = 'scale(0.1)'
    s.style.transform = `translateX(${100 * (i - slid)}%)`;
  });
};

let curSlide = 0;
const maxSlide = slide.length;
console.log(maxSlide);
const nextSlide = function (e) {
  e.preventDefault();
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function (e) {
  e.preventDefault();
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  } else if (e.key === "ArrowRight") {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  }
});

const init = function () {
  goToSlide(0);
};
init();

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    sixthBoxModal.style.opacity = 0;
  }
});
