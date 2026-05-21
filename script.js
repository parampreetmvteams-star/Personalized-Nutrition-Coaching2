const hamburger = document.getElementById("hamburger");
const navContent = document.getElementById("nav-content");
const monthlyPricing = document.querySelectorAll(".monthly");
const yearlyPricing = document.getElementById("disc-yearly");
const faqCloseIcon = document.querySelectorAll(".faq-cross-icon");
const pricingDetails = document.querySelectorAll(".pricing-grid-detail");

hamburger.addEventListener("click", () => {
  navContent.classList.toggle("open");
});

monthlyPricing.forEach((pricing) => {
  pricing.addEventListener("click", () =>{
    monthlyPricing.forEach(el => el.classList.remove("active"));
    pricing.classList.add("active");

    const targetedTab = pricing.getAttribute("data-tab");
    pricingDetails.forEach((content) =>{
      const targetedContent = content.getAttribute("data-tab");
      if (targetedTab === targetedContent) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
      yearlyPricing.textContent = pricing.textContent;
      });
    });
  });


faqCloseIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    const parentFaq = icon.parentElement;
    parentFaq.classList.toggle("active");
  });
});






var swiper = new Swiper(".mySwiper", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
    200: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
