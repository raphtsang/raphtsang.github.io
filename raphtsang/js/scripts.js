document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  });

// Home
function goHome(){
    location.href='/'; 
}

// UI/UX
function goWork(){
    location.href='/html/work.html'; 
}

// UI/UX
function goUIUX(){
    location.href='/html/uiux.html'; 
}

// Graphic
function goGraphic(){
    location.href='/html/graphic.html'; 
}

// Furniture Galore
function goFG(){
    location.href='/html/furniture-galore.html'; 
}

// The Banking App
function goTBA(){
    location.href='/html/the-banking-app.html'; 
}

// Sony Brand Refresh
function goSony(){
    location.href='/html/sony-brand-refresh.html'; 
}

// Neon and Cyberpunk
function goNeon(){
    location.href='/html/neon-and-cyberpunk.html'; 
}
// Inspirock
function goInsp(){
    location.href='/html/inspirock.html';
}
// Mario World
function goMario(){
    location.href='/html/mario-world.html';
}
// Frame vs. Field
function goFVF(){
    location.href='/html/frame-vs-field.html';
}
// Slchld Vinyl
function goSlchld(){
    location.href='/html/slchld-vinyl.html';
}
// Outfit Colour Index
function goOutfit(){
    location.href='/html/outfit-coulour-index.html';
}
  
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