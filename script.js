//  GESTION DU RESPONSIVE DE LA NAV //

const hamburgerToggler = document.querySelector(".hamburger")
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
    hamburgerToggler.classList.toggle("open")

    const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

    navLinksContainer.classList.toggle("open")
}

hamburgerToggler.addEventListener("click" , toggleNav)

new ResizeObserver(entries =>{
    if(entries[0].contentRect.width <= 900){
        navLinksContainer.style.transition = "transform 0.3s ease-out"}
    else{navLinksContainer.style.transition = "none"}
}).observe(document.body)

// ------------------------------- //

// ----- ANIMATIONS GSAP ----- //

document.addEventListener("DOMContentLoaded", function() {
    // Initialisation de Splitting.js pour séparer les lettres
    Splitting();

    // Animation de chaque lettre avec GSAP
    gsap.from(".slogan span", {
        duration: 1,
        opacity: 0,
        y: -20,
        stagger: 0.01,
        ease: "power2.out",
        onStart: function() {
            // Faire apparaître le texte globalement au début de l'animation
            gsap.set(".slogan", { opacity: 1 });
        }
    });
});