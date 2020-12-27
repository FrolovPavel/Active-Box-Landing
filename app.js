
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
window.addEventListener("load", () => {
    let dataScroll = document.querySelectorAll("[data-sroll]");
    console.log(dataScroll);
    for (let i = 0; i < dataScroll.length; i++)
        dataScroll[i].addEventListener("click", (event) => {
          event.preventDefault();
        const blockID = event.target.getAttribute("data-sroll").substr(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        })
})




