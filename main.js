// header navbar
window.addEventListener("scroll", function () {
    var header = this.document.querySelector("nav");
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

// scrollReveal Animation
ScrollReveal().reveal(".text-header", { distance: '60px', duration: 2500, delay: 40}) 
ScrollReveal().reveal(".about-images", { origin: 'top', distance: '60px', duration: 2500, delay: 40 })  
ScrollReveal().reveal(".about-section-text", { origin: 'bottom', distance: '60px', duration: 2500, delay: 40 }) 
ScrollReveal().reveal(".interests", { origin: 'top', distance: '60px', duration: 3500, delay: 50 }) 
ScrollReveal().reveal(".experience-header", { origin: 'top', distance: '60px', duration: 2500, delay: 40 }) 
ScrollReveal().reveal(".timelines-left", { origin: 'bottom', distance: '30px', duration: 3500, delay: 50 })
ScrollReveal().reveal(".timelines-right", { origin: 'bottom', distance: '30px', duration: 3500, delay: 50 })
ScrollReveal().reveal(".ps-skill", { origin: 'top', distance: '30px', duration: 3500, delay: 50 })
ScrollReveal().reveal(".ai-skill", { origin: 'bottom', distance: '30px', duration: 3500, delay: 50 })
ScrollReveal().reveal(".af-skill", { origin: 'top', distance: '30px', duration: 3500, delay: 50 })
ScrollReveal().reveal(".contact-header", { origin: 'top', distance: '60px', duration: 2500, delay: 40 })
ScrollReveal().reveal(".inputBox", { origin: 'bottom', distance: '60px', duration: 2500, delay: 40 }) 


// hamburger
const menuHamburger = document.querySelector(".menu-hamburger")
const navLink = document.querySelector(".navlink")

menuHamburger.addEventListener("click", mobileMenu);
function mobileMenu(){
    menuHamburger.classList.toggle("active");
    navLink.classList.toggle("active");
}
// scroll top page

var scrollOnTop = document.getElementById("scrollOnTop");

window.onscroll = function() {scrollFucntion()};

function scrollFucntion(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollOnTop.style.display = "block";
    } else {
        scrollOnTop.style.display = "none" ;
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}