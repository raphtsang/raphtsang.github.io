function goCollection(){
  location.href='/html/collection.html'; 
  // object.style.cursor = pointer; 
}

function goProduct(){
  location.href='/html/product.html'; 
  // object.style.cursor = pointer; 
}

let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(numberOfSlides) {
  showSlides(slideIndex += numberOfSlides);
}

function currentSlide(currentSlideNumber) {
  showSlides(slideIndex = currentSlideNumber);
}

function showSlides(nextSlideNumber) {
  let i;
  let slides = document.getElementsByClassName("slide-container");
  let thumbs = document.getElementsByClassName("thumbnail-img");
  if (nextSlideNumber > slides.length) {slideIndex = 1}    
  else if (nextSlideNumber < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < thumbs.length; i++) {
    thumbs[i].className = thumbs[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  thumbs[slideIndex-1].className += " active";
}

var expand = document.getElementsByClassName("expand");
var i;

for (i = 0; i < expand.length; i++) {
  expand[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
