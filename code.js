/* Toggle Menu */
let home = document.querySelectorAll("nav ul li a")[0];
let about = document.querySelectorAll("nav ul li a")[2];
let projects = document.querySelectorAll("nav ul li a")[3];
let achieve = document.querySelectorAll("nav ul li a")[4];
/* NavLinks onclick Events */
home.addEventListener("click",()=>{
    $("#about-cont").fadeOut(0);
    $("#ach-cont").fadeOut(0);
    $("#proj-container").fadeOut(0);
    $("#intro").fadeIn(1000);
});
about.addEventListener("click",()=>{
    $("#intro").fadeOut(0);
    $("#ach-cont").fadeOut(0);
    $("#proj-container").fadeOut(0);
    $("#about-cont").fadeIn(1000);
});
achieve.addEventListener("click",()=>{
    $("#intro").fadeOut(0);
    $("#about-cont").fadeOut(0);
    $("#proj-container").fadeOut(0);
    $("#ach-cont").fadeIn(1000);
});
projects.addEventListener("click",()=>{
    $("#intro").fadeOut(0);
    $("#about-cont").fadeOut(0);
    $("#ach-cont").fadeOut(0);
    $("#proj-container").fadeIn(1000);
});