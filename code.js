/* Toggle Menu */
let navBar = document.querySelector("nav");
let myNav = document.getElementById("nav-bar");
let navLinks = myNav.querySelectorAll("li");
let hamMenu = document.getElementById("ham-menu");
hamMenu.addEventListener("click",()=>{
    myNav.classList.toggle("active");
    if (myNav.classList.contains('active')) {
        hamMenu.classList.remove("fa-bars");
        hamMenu.classList.add("fa-times");
    } else {
        hamMenu.classList.remove("fa-times");
        hamMenu.classList.add("fa-bars");
    }
});
navLinks.forEach((navLink) => {
    navLink.addEventListener("click",()=> {
        myNav.classList.remove("active");
        hamMenu.classList.add("fa-bars");
    });
});
window.onscroll = function () {
    /* Progress Bar */
    let pos = document.documentElement.scrollTop;
    let calHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scroll = (pos * 100)/ calHeight;
    document.getElementById("progress-bar").style.width= `${scroll}%`;
    /* Scroll To Top */
    let scrollTopButton = document.getElementById("scroll-top-btn");
    let scrollIcon = document.querySelector("#scroll-top-btn i");
    if (pos>300) {
        scrollIcon.classList.add("fa-arrow-up");
        scrollIcon.classList.remove("fa-arrow-down");

    } else {
        scrollIcon.classList.add("fa-arrow-down");
        scrollIcon.classList.remove("fa-arrow-up");
    }
}
scrollButton = document.getElementById("scroll-top-btn");
scrollIcon = document.querySelector("#scroll-top-btn i");
scrollButton.addEventListener("click",() => {
    if (scrollIcon.classList.contains('fa-arrow-down')) {
        document.getElementById('proj-container').scrollIntoView();
    } else {
        document.documentElement.scrollTop=0;
    }
});