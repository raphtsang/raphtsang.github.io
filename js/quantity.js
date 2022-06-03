const totalCount = document.querySelectorAll(".quantity");


totalCount.forEach(item => {
  let count = 1;
  item.innerHTML = count;
  const plusIncrement = () => {
    count++;
    item.innerHTML = count;
  };
  
  const minusIncrement = () => {
    count--;
    if (count < 0)
    count++;
    item.innerHTML = count;
  };
  
  const incrementCount = document.querySelectorAll(".plus.increment");
  const decrementCount = document.querySelectorAll(".minus.increment");

  incrementCount.forEach(item => {
    item.addEventListener("click", plusIncrement)
  });
  decrementCount.forEach(item => {
    item.addEventListener("click", minusIncrement)
  })

});

