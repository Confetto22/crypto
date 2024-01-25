const hamburgerEl = document.querySelector(".hamburger");
const slideMenuEl = document.querySelector(".slide-menu");
const closeButtonEl = document.querySelector(".close-button");



function closeAnimate() {
    closeButtonEl.addEventListener("click", function () {
        slideMenuEl.classList.remove("menu-transition");
    })

    
}


function menuAnimate() {
    hamburgerEl.addEventListener("click", function () {
        slideMenuEl.classList.toggle("menu-transition");
    })

    closeAnimate();
}




menuAnimate();