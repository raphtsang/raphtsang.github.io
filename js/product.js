document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

function goRooms(){
  location.href='/html/rooms.html'; 
}

document.querySelectorAll(".product-rooms-img, .product-rooms-title").forEach(item => {
  item.style.cursor = "pointer";
  item.addEventListener("click", event => {
    console.log("clicked!");
    goRooms();
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

// const expandContainer = document.querySelector(".expand-container")

// document.querySelector(".product-content").appendChild(expandContainer)

function mediaQuery845(maxWidth845) {
  const expandContainer = document.querySelector(".expand-container")
  const productContentSidebar = document.querySelector(".product-content.sidebar")
  const quantityLikesContainer = document.querySelector(".quantity-likes-container")
  if (maxWidth845.matches) { 
    document.querySelector(".product-content").appendChild(expandContainer)
  }
  else {
    productContentSidebar.insertBefore(expandContainer, quantityLikesContainer)
  }
}

let maxWidth845 = window.matchMedia("(max-width: 845px)");
mediaQuery845(maxWidth845);
maxWidth845.addEventListener("change", mediaQuery845);


let addToCartBtn = document.querySelector(".product-btns-container .product-btn.btn-secondary")

addToCartBtn.addEventListener