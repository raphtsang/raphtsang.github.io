// ROOMS LOAD MORE
const roomsImgSet = document.querySelector(".rooms-img-set");
const clone = roomsImgSet.cloneNode(true);
const loadMoreBtn = document.querySelector(".load-more");

function loadMore() {
  document.querySelector(".rooms-img-container").appendChild(clone)
  loadMoreBtn.innerHTML = "you've reached the end :("
  loadMoreBtn.style.textDecoration = "none"
  loadMoreBtn.style.cursor = "auto"
}

loadMoreBtn.addEventListener("click", loadMore);