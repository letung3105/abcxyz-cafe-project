//changing images of signature products on main page
var slideIndex = 0;
function nextSlide(){
    showSlide(slideIndex + 1);
}
function prevSlide(){
    showSlide(slideIndex - 1)
}
function showSlide(updatedIndex){
    var slides = document.getElementsByClassName("slide-image-container");
    if (updatedIndex > slides.length - 1) {
        slideIndex = 0;
    } else if (updatedIndex < 0){
        slideIndex = slides.length - 1;
    } else {
        slideIndex = updatedIndex;
    }
    for (var i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
