
let slideIndex=1;
//initiate a function 
showSlides(slideIndex);
//define the function triggered by prev/next arrow
function plusSlide(n) {
    showSlides(slideIndex +=n);
}
//define the function troggered by clicking on the dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides=document.getElementsByClassName("mySlides");
    let dots=document.getElementsByClassName("dot");
    if (n>slides.length) {slideIndex=1}
    if (n<1){slideIndex=slides.length}
    for (i=0; i < slides.length; i++) {
        slides[i].style.display="none";//Reset all image to not display
    }
    for (i=0; i<slides.length;i++) {
        dots[i].className=dots[i].className.replace("active","");//Rest all dots to no active
    }
    slides[slideIndex-1].style.display= "block";//Only displays the correct image
    dots[slideIndex-1].className += " active";//make sure there is a space before active to concatinate active including a space to the class name
}