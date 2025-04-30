'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

const opt= document.getElementById("otp");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}

opt.addEventListener('click', function(){

  alert("your order id is: 160720")
} )



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}



/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});


function slideImages() {
  const slider = document.querySelector('.testi-list');
  let slides = document.querySelectorAll('.testi-item');
  let currentIndex = 0;
  const slideWidth = 600; 
  const intervalDuration = 3000; 


  function nextSlide() {
      currentIndex++;
      if (currentIndex === slides.length) {
          currentIndex = 0; 

          slider.style.transition = "none";
          slider.style.transform = `translateX(0)`;

          setTimeout(() => {
              slider.style.transition = "transform 2s ease-in-out"; 
              slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
          }, 100);
      } else {
          slider.style.transition = "transform 2s ease-in-out"; 
          slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      }
  }

  setTimeout(() => {
      nextSlide();
      setInterval(nextSlide, intervalDuration); 
  }, intervalDuration); 
}




document.addEventListener("DOMContentLoaded", function () {
  const parent = document.querySelector(".parent");
  const cards = document.querySelectorAll(".card");

  const gap = 10; // Space between cards
  const speed = 1.5; // Movement speed

  // Get parent width & dynamically calculate card width
  const parentWidth = parent.offsetWidth;
  const cardWidth = (parentWidth - 2 * gap) / 3; // Parent fits 3 cards + 2 gaps

  // Apply calculated width to cards
  cards.forEach((card) => {
      card.style.width = `${cardWidth}px`;
  });

  // Position cards in a row
  cards.forEach((card, index) => {
      card.style.left = `${index * (cardWidth + gap)}px`;
  });

  function moveCards() {
      cards.forEach((card) => {
          let currentPos = parseFloat(card.style.left);
          card.style.left = `${currentPos - speed}px`;

          // 🌟 **Smooth Loop**: Move first card back after it fully exits left
          if (currentPos < -cardWidth) {
              let maxPos = Math.max(...Array.from(cards).map(c => parseFloat(c.style.left)));
              card.style.left = `${maxPos + cardWidth + gap}px`;
          }
      });

      requestAnimationFrame(moveCards);
  }

  moveCards();
});
