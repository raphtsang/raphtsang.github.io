document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});


let dropdown = document.querySelector(".dropdown");
let submenu = document.querySelector(".nav-submenu"); 
let searchIcon = document.querySelector(".lnr-magnifier")

dropdown.addEventListener("mouseover", event => { 
    submenu.classList.toggle("show-sub");
  }
);

// function searchExpand(){
  
// }

// searchIcon.addEventListener("click", )

// var sideDropdown = document.getElementsByClassName("side-dropdown");
// var i;

// for (i = 0; i < sideDropdown.length; i++) {
//   sideDropdown[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     console.log("hilaosdiaw")
//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }
let popup = document.querySelector(".popup")
let cartPopup = document.querySelector(".popup.side-cart")
let sideDropdown = document.querySelector(".menu-btn.side-dropdown");
let chevronDown = sideDropdown.firstElementChild;
let hamburgerIcon = document.getElementsByClassName("lnr-menu");
let cartIcon = document.querySelector(".lnr-cart")
let i;
// let crossIcon = document.querySelector(".lnr-cross");
let crossIcon = document.getElementsByClassName("lnr-cross")
let overlay = document.getElementById("overlay");


function mediaQuery(maxWidth) {
  if (maxWidth.matches) { 
    function openPopup() {
      popup.style.transform = "translateX(0px)";
      on();
    }
    function openCartPopup() {
      cartPopup.style.transform = "translateX(0px)";
      on();
    }
    
    function closePopup(){
      popup.style.transform = "translateX(500px)";
      off();
    }
    function closeCartPopup(){
      cartPopup.style.transform = "translateX(500px)";
      off();
    }
    
  } else {
    function openPopup() {
      popup.style.transform = "translateX(0px)";
      on();
    }
    function openCartPopup() {
      cartPopup.style.transform = "translateX(0px)";
      on();
    }
    
    function closePopup(){
      popup.style.transform = "translateX(-500px)";
      off();
    }
    function closeCartPopup(){
      cartPopup.style.transform = "translateX(-500px)";
      off();
    }
    
  }
  for (i = 0; i < hamburgerIcon.length; i++) {
    hamburgerIcon[i].addEventListener("click", openPopup);
  }
  
  for (i = 0; i < crossIcon.length; i++) {
    crossIcon[i].addEventListener("click", closePopup);
    crossIcon[i].addEventListener("click", closeCartPopup);
  }

  cartIcon.addEventListener("click", openCartPopup);

  overlay.addEventListener("click", closePopup)
  overlay.addEventListener("click", closeCartPopup)
  
}

let maxWidth = window.matchMedia("(max-width: 700px)");
mediaQuery(maxWidth);
maxWidth.addEventListener("change", mediaQuery);




sideDropdown.addEventListener("click", event => {
  sideDropdown.classList.toggle("active");
  chevronDown.classList.toggle("reverse");
  let dropdownContent = sideDropdown.nextElementSibling;
  if (dropdownContent.style.maxHeight) {
    dropdownContent.style.maxHeight = null;
  } else {
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
  }
}); 


// for (i = 0; i < hamburgerIcon.length; i++) {
//   hamburgerIcon[i].addEventListener("click", openPopup);
// }

// crossIcon.addEventListener("click", closePopup)

// overlay.addEventListener("click", closePopup)

