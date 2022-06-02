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
let sideDropdown = document.querySelector(".menu-btn.side-dropdown");
let chevronDown = sideDropdown.firstElementChild;
let hamburgerIcon = document.querySelector(".lnr-menu")
let crossIcon = document.querySelector(".lnr-cross")
let overlay = document.getElementById("overlay")

function openPopup() {
  popup.style.transform = "translateX(0px)";
  on();
}

function closePopup(){
  popup.style.transform = "translateX(-500px)";
  off();
}


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

hamburgerIcon.addEventListener("click", openPopup)

crossIcon.addEventListener("click", closePopup)

overlay.addEventListener("click", closePopup)

