document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

function goCollection(){
    location.href='/html/collection.html'; 
}

document.querySelectorAll(".main-collection-img, .main-collection-txt, .main-collection-title, .hero-title").forEach(item => {
  item.style.cursor = "pointer";
  item.addEventListener("click", event => {
    console.log("clicked!");
    goCollection();
  });
});

function goProduct(){
    location.href='/html/product.html'; 
}

document.querySelectorAll(".deals-preview, .main-deals-txt, .main-deals-title").forEach(item => {
  item.style.cursor = "pointer";
  item.addEventListener("click", event => {
    console.log("clicked!");
    goProduct();
  });
});

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
  let dashes = document.getElementsByClassName("dash");
  if (nextSlideNumber > slides.length) {slideIndex = 1}    
  else if (nextSlideNumber < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dashes.length; i++) {
    dashes[i].className = dashes[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dashes[slideIndex-1].className += " active";
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}