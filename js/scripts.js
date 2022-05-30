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

// let slideIndex = 0;
// let slideList;
// // let slideClass;
// let animationIndex = 0;

// function showSlide(index, animation = 0){
    
//     if(slideIndex >= slideList.length){
//         index = 0;
//     }
//     else if(slideIndex < 0) {
//         index = slideList.length-1;
//     }
//     console.log("Hiding slide index" +slideIndex);
//     console.log("Showing slide index" +index);
    
//     if(animation <= 1){
//         slideList[slideIndex].style.display = "none";
//         slideList[index].style.display = "block";
//     }

//     else if(animation === 1){
//         slideList[slideIndex].style.display = "block";
//         slideList[index].style.display = "block";
//     }

//     slideIndex = index;
// }

// function initSlides(container, slideClass = "slide"){
//     slideList = container.getElementsByClassName(slideClass);
//     slideIndex = 0;
//     for (const slide of slideList) {
//         slide.style.display = "none";

//     }
//     let arrowList = document.getElementsByClassName("arrow");

//     for (const arrow of arrowList) {
//         console.log("Adding click listener for arrow")
//         if(arrow.classList.contains("left")){
//             arrow.addEventListener("click", function(){
//                 showSlide(slideIndex-1);
//             })
//         }
//         else {
//             arrow.addEventListener("click", function(){
//                 showSlide(slideIndex+1);
//             })
//         }
//     }
//     showSlide(0);
// }

// document.addEventListener("DOMContentLoaded", function(){
//     initSlides(document.getElementsByClassName("slider-container")[0])
// })

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

// var colorPicker = document.getElementsByClassName("color-picker");
// var swatches = colorPicker.getElementsByClassName("color-swatch");

// for (var i = 0; i < swatches.length; i++) {
//   swatches[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");

//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }

//     this.className += " active";

//   });
// }

