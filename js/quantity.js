const totalCount = document.querySelector(".quantity");

let count = 1;

totalCount.innerHTML = count;

const plusIncrement = () => {
  count++;
  totalCount.innerHTML = count;
};

const minusIncrement = () => {
  count--;
  if (count < 0)
  count++;
  totalCount.innerHTML = count;
};

const incrementCount = document.querySelector(".plus.increment");
const decrementCount = document.querySelector(".minus.increment");

incrementCount.addEventListener("click", plusIncrement);
decrementCount.addEventListener("click", minusIncrement); 
