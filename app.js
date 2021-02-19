
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

document.querySelectorAll('a[href*="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top -70;

        window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
        });
    });
});

