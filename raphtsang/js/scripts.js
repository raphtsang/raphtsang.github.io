document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  });

  // ADD AOS CLASS 
  const allAOS = document.querySelectorAll("h1, h2, h3, h4, h5, p");
  allAOS.forEach(element => {
    element.classList.add("aos");
    element.style.cursor = "none";
    // console.log("added AOS");    
  });

  // ADD AOS-no-X CLASS 
  const addAOSnoX = document.querySelectorAll(".img-container");
  addAOSnoX.forEach(element => {
    element.classList.add("aos-no-x");
    element.style.cursor = "none";
    // console.log("added AOSnoX");    
  });

  // INTERSECTION OBSERVER FOR ANIMATE ON SCROLL
const intObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      // setTimeout(() => {
        entry.target.classList.add("show");
      // }, 50)
    } else {
      entry.target.classList.remove("show");
    }
  });
});

// ANIMATE ON SCROLL 
const AOSElements = document.querySelectorAll(".aos");
const AOSnoXElements = document.querySelectorAll(".aos-no-x")
AOSElements.forEach((el) => intObserver.observe(el));
AOSnoXElements.forEach((el) => intObserver.observe(el));

// CURSOR
const cursor = document.createElement("span");
cursor.id = "cursor"
document.body.appendChild(cursor);

// const cursor = document.getElementById("cursor");

document.body.onpointermove = event => {
  const { clientX, clientY } = event;

  cursor.style.left = `${clientX}px`;
  cursor.style.top = `${clientY}px`;

}

const allCursorEvents = document.querySelectorAll("a, button, .wordmark, .img-container, .imgbtn, .filter-cont>h2, .lit-img, .lit-vid, footer > h1 em");
allCursorEvents.forEach(element => {
  element.style.cursor = "none";
  element.addEventListener("mouseover", ()=>{
    cursor.classList.add("grow");
  });
  element.addEventListener("mouseleave", ()=>{
    cursor.classList.remove("grow");
  });
});


// BLOB
// const blob = document.getElementById("blob");

// document.body.onpointermove = event => {
//   const { clientX, clientY } = event;
  
//   blob.style.left = `${clientX}px`;
//   blob.style.top = `${clientY}px`;
//   // blob.animate({
//   //   left: `${clientX}px`,
//   //   top: `${clientY}px`
//   // }, { duration: 3000, fill: "forwards" });
// }


// Home
function goHome(){    location.href='/raphtsang/'; }
// UI/UX
function goWork(){    location.href='/raphtsang/html/work.html'; }
// UI/UX
function goUIUX(){    location.href='/raphtsang/html/uiux.html'; }
// Graphic
function goGraphic(){    location.href='/raphtsang/html/graphic.html'; }
// Furniture Galore
function goFG(){    location.href='/raphtsang/html/furniture-galore.html'; }
// The Banking App
function goTBA(){    location.href='/raphtsang/html/the-banking-app.html'; }
// Sony Brand Refresh
function goSony(){    location.href='/raphtsang/html/sony-brand-refresh.html'; }
// Neon and Cyberpunk
function goNeon(){    location.href='/raphtsang/html/neon-and-cyberpunk.html'; }
// Inspirock
function goInsp(){    location.href='/raphtsang/html/inspirock.html';}
// Mario World
function goMario(){    location.href='/raphtsang/html/mario-world.html';}
// Frame vs. Field
function goFVF(){    location.href='/raphtsang/html/frame-vs-field.html';}
// Slchld Vinyl
function goSlchld(){    location.href='/raphtsang/html/slchld-vinyl.html';}
// Outfit Colour Index
function goOutfit(){    location.href='/raphtsang/html/outfit-coulour-index.html';}
// Email
function goEmail(){  location.href='mailto:raphaeltsang88@gmail.com';}

let menuSmiley = document.getElementById("menu-smiley");
let menuCross = document.getElementById("menu-cross");
let overlay = document.getElementById("overlay");
let navList = document.querySelector(".nav-list")
// let mobilePopup = document.querySelector(".mobile-popup");


// // Mobile Popup (New Trial)

// function openMenu () {
//   mobilePopup.style.transform = "translateX(0)";
// }

// function closeMenu () {
//   mobilePopup.style.transform = "translateX(50vw)"
// }


// Overlay On/Off - for detecting click outside of popups
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

// function displayOn() {
//   navList.style.display = "flex";
// }

// function displayOff() {
//   navList.style.display = "none";
// }

function menuSlideOn() {
  navList.style.transform = "translateX(0)";
}

// Open and Close Menu
function openMenu() {
  // displayOn();
  menuSlideOn();
  on();
}

function closeMenu() {
  // menuCross.style.transform = "rotate(45deg)"
  // console.log("done");
  navList.style.transform = "translateX(50vw)";
  off();
  // displayOff();
  // setTimeout(menuCross.style.transform = "rotate(0deg)")
  // console.log("done");
}

// Smiley Open
menuSmiley.addEventListener("click", event => {
  openMenu();
});

// Cross Close
menuCross.addEventListener("click" , event => {
  closeMenu();
});

// Overlay Close
overlay.addEventListener("click", event => {
  closeMenu();
});



// FILTERS
// Get all filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");

// Get all items
const filterCont = document.querySelectorAll(".filter-cont");

// Add click event listeners to filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((button) => {
      button.classList.remove("active");
    });
    // Add active class to clicked button
    button.classList.add("active");

    // Get data filter value of clicked button
    const filterValue = button.getAttribute("data-filter");

    // Filter items based on data filter value
    filterCont.forEach((item) => {
      if (filterValue === "recent") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else if (item.classList.contains(filterValue)) {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  });
});

// LIGHTBOX
const lightBox = document.createElement("div");
lightBox.id = "lightbox"
document.body.appendChild(lightBox);

const litImages = document.querySelectorAll(".lit-img");
litImages.forEach(image => {
  image.addEventListener("click", e => {
    lightBox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src
    while (lightBox.firstChild) {
      lightBox.removeChild(lightBox.firstChild);
    }
    lightBox.appendChild(img);
  });
});

// VIDEO
const litVideos = document.querySelectorAll(".lit-vid");
litVideos.forEach(video => {
  video.addEventListener("click", e => {
    lightBox.classList.add("active");
    const vids = document.createElement("video");
    vids.src = video.src
    while (lightBox.firstChild) {
      lightBox.removeChild(lightBox.firstChild);
    }
    lightBox.appendChild(vids);
    const lightVid = lightBox.querySelector("video");
    lightVid.setAttribute("autoplay", "");
    lightVid.setAttribute("loop", "");
    lightVid.setAttribute("controls", "");
    lightVid.setAttribute("controlslist", "nodownload");
  });
});

lightBox.addEventListener("click", e => {
  if(e.target !== e.currentTarget) return;
  lightBox.classList.remove("active");
})

// FOOTER GET IN TOUCH
const getInTouch = document.querySelector("footer > h1 em");

getInTouch.addEventListener("click", goEmail);



// let maxWidth = window.matchMedia("(max-width: 660px)");
// mediaQuery(maxWidth);
// maxWidth.addEventListener("change", mediaQuery);