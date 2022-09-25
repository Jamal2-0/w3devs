

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

var map = L.map('map').setView([6.4483, 7.5139], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
var greenIcon = L.icon({
  iconUrl: '/img/tinywow_IMG_3975 2_5927763.png',
});
L.marker([6.4567, 7.5034], {icon: greenIcon}).addTo(map);
var popup = L.popup()
    .setLatLng([6.4567, 7.5034])
    .setContent("<b>Hello world</b>, <br> You can find me at GRA Enugu, Nigeria.")
    .openOn(map);




// gsap.from(".nav", {duration: 1, y: '-100%', ease: 'bounce'})


// gsap.from(".navLink1", {duration: 1, opacity: 0, delay: 1, stagger: .5})

// const timeline = gsap.timeline({defaults: {duration:1}})
// timeline.from(".nav", { y: '-100%', ease: 'bounce'})
// timeline.from(".navLink1", { opacity: 0, delay: 1, stagger: .5})