document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  });

function searchFunction() {
    // Declare variables
    var input, filter, searchItems, searchDiv, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    searchItems = document.getElementById("searchItems");
    searchDiv = searchItems.getElementsByTagName('div');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < searchDiv.length; i++) {
    //   imgTag = searchDiv[i].getElementsByTagName("img");
    //   for (i = 0; i < imgTag.length; i++) {
    //         if (imgTag.classList.contains(filter)) {
    //           searchDiv[i].style.display = "";
    //         } else {
    //         searchDiv[i].style.display = "none";
    //         }
    //   }
    
        a = searchDiv[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          searchDiv[i].style.display = "block";
        } else {
          searchDiv[i].style.display = "none";
        }
    }
  }

  var imageEls = document.getElementsByTagName("img");
  //Iterating
  for(var i=0;i<imageEls.length;i++){
     imageEls[i].title=imageEls[i].alt;
  }
