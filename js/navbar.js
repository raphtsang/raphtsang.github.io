document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

let i;
let searchIcon = document.querySelector(".lnr-magnifier");
let popup = document.querySelector(".popup");
let cartPopup = document.querySelector(".popup.side-cart");
let orderPopup = document.querySelector(".popup.down");
let sideDropdown = document.querySelector(".menu-btn.side-dropdown");
let chevronDown = sideDropdown.firstElementChild;
let hamburgerIcon = document.getElementsByClassName("lnr-menu");
let cartIcon = document.querySelector(".lnr-cart");
let crossIcon = document.getElementsByClassName("lnr-cross");
let overlay = document.getElementById("overlay");
let goToCartBtn = document.querySelector(".product-btn.btn-secondary");
let addToCartBtn = document.querySelector(".product-btns-container .product-btn.btn-secondary");
let viewOrderSummary = document.querySelector(".view-order-summary");

// Overlay On/Off - for detecting click outside of popups
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

// POPUP MENU SUBMENU
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

// CHANGE POPUP LOCATION for MOBILE
function mediaQuery(maxWidth) {
  // Mobile View
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
    if (orderPopup !== null){
      function openOrderPopup() {
        orderPopup.style.transform = "translateY(0px)";
        on();
      }
      function closeOrderPopup() {
        orderPopup.style.transform = "translateY(-80vh)";
        off();
      }
    }
  // Desktop View 
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
    crossIcon[i].addEventListener("click", closeOrderPopup);
  }

  overlay.addEventListener("click", closePopup);
  overlay.addEventListener("click", closeCartPopup);
  overlay.addEventListener("click", closeOrderPopup);

  let sofaCardCartBtn = document.querySelectorAll(".lnr-cart")

  sofaCardCartBtn.forEach(item => {
  item.addEventListener("click", event => {
    openCartPopup();
    });
  });

  if(viewOrderSummary !== null){
    viewOrderSummary.addEventListener("click", openOrderPopup);
  }

  if(addToCartBtn !== null){
  addToCartBtn.addEventListener("click", openCartPopup);
  }

}

goToCartBtn.addEventListener("click", event => {
  window.location.href = "/html/cart.html"
})

// QUANTITY COUNTER
const incrementCount = document.querySelectorAll(".plus.increment");
const decrementCount = document.querySelectorAll(".minus.increment");

incrementCount.forEach(item => {
  let totalCount = item.parentNode.querySelector('input[type=number]');
  item.addEventListener("click", event => {
    totalCount.stepUp();
  })
});

decrementCount.forEach(item => {
  let totalCount = item.parentNode.querySelector('input[type=number]');
  item.addEventListener("click", event => {
    totalCount.stepDown();
  })
});


let maxWidth = window.matchMedia("(max-width: 700px)");
mediaQuery(maxWidth);
maxWidth.addEventListener("change", mediaQuery);

