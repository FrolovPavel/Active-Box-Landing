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

