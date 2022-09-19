var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  
  // centeredSlides: true,
  spaceBetween: 10,
  mousewheel: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const navToggler = document.querySelector(".navToggler");

const navBar = document.querySelector("#navMenu");

const navLinks = document.querySelectorAll("#navLink")


navToggler.addEventListener("click",()=>{
  navBar.classList.toggle("hidden")
  // hamburger.classList.toggle("bg-white")
});

navLinks.forEach(link=>{
  link.addEventListener("click",()=>{
    navBar.classList.toggle("hidden")
  })
})

// gsap.from(".nav", {duration: 1, y: '-100%', ease: 'bounce'})


// gsap.from(".navLink1", {duration: 1, opacity: 0, delay: 1, stagger: .5})

// const timeline = gsap.timeline({defaults: {duration:1}})
// timeline.from(".nav", { y: '-100%', ease: 'bounce'})
// timeline.from(".navLink1", { opacity: 0, delay: 1, stagger: .5})