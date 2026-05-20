const hamburger = document.getElementById('hamburger');
const navContent = document.getElementById('nav-content');
const monthlyPricing = document.getElementById('monthly');
const yearlyPricing = document.getElementById('yearly');
const faqCloseIcon = document.querySelectorAll(".faq-cross-icon");
// const faqQusAns = document.querySelectorAll("qus-ans");


hamburger.addEventListener('click', () => {
    navContent.classList.toggle('open');
});

monthlyPricing.addEventListener('click', () => {
    monthlyPricing.classList.add('active');
    yearlyPricing.classList.remove('active');
});
yearlyPricing.addEventListener('click', () => {
    yearlyPricing.classList.add('active');
    monthlyPricing.classList.remove('active');
});

faqCloseIcon.forEach((icon) =>{
  icon.addEventListener("click", () =>{

    const parentFaq = icon.parentElement;
    parentFaq.classList.toggle("active");
    
  });
});


// var swiper = new Swiper(".mySwiper", {
//       loop: true,
//       slidesPerView: 3,
//       spaceBetween: 30,
//       freeMode: true,
//     //   autoHeight: true, 
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },


//     breakpoints: {
//       200: {
//       slidesPerView: 1,
//     //   spaceBetween: 20,
//     },
//     540: {
//       slidesPerView: 1,
//     //   spaceBetween: 20,
//     },
//     640: {
//       slidesPerView: 2,
//     //   spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,
//     //   spaceBetween: 10,
//     },
//     1024: {
//       slidesPerView: 3,
//     //   spaceBetween: 30,
//     },
//   },
// });




