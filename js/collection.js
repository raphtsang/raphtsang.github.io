document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  });
  
  function goCollection(){
      location.href='/html/collection.html'; 
      // object.style.cursor = pointer; 
  }
  
  function goProduct(){
      location.href='/html/product.html'; 
      // object.style.cursor = pointer; 
  }
  
let swatchIndex = 1;
showSwatches(swatchIndex);

function moveSwatch(numberOfSwatches) {
  showSwatches(swatchIndex += numberOfSwatches);
}

function currentSwatch(currentSwatchNumber) {
  showSwatches(swatchIndex = currentSwatchNumber);
}

function showSwatches(nextSwatchNumber) {
  let i;
  let swatches = document.getElementsByClassName("color-swatch");
  let underlines = document.getElementsByClassName("underline");
  if (nextSwatchNumber > swatches.length) {swatchIndex = 1}    
  else if (nextSwatchNumber < 1) {swatchIndex = swatches.length}
  for (i = 0; i < swatches.length; i++) {
    swatches[i].className = swatches[i].className.replace(" active", "")  
  }
  for (i = 0; i < underlines.length; i++) {
    underlines[i].className = underlines[i].className.replace(" active", "");
  }
  swatches[swatchIndex-1].className += " active";  
  underlines[swatchIndex-1].className += " active";
}

