
/* fixed header*/
let header = document.querySelector("#header");
let intro = document.querySelector("#intro");
let introH = intro.clientHeight;
let scrollPos = pageYOffset;

addEventListener("scroll", function () {
    scrollPos = pageYOffset;

    if(scrollPos > introH) {
        header.classList.add("fixed");
    } else  {
        header.classList.remove("fixed");
    }

})

/* Smooth sroll */
let nav = document.querySelector('.nav');
document.querySelectorAll('a[href*="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top -60;

        window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
        });
        function navHide() {
            nav.classList.toggle("show")
        }

        setTimeout(navHide, 200)
    });
});

/* Nav Burger */

let burgerBtn = document.querySelector("#nav_burger");

burgerBtn.addEventListener("click", (e) => {

    nav.classList.toggle("show")
})

/*Reviews*/
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


