let button = document.querySelector("#button")
let resNum = document.querySelectorAll(".Num");
let number = document.querySelector(".resultNums")

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let mathRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return mathRandom
  
}

button.addEventListener("click", function(event) {
  event.preventDefault();
  let res = [];
  for (let i = 0; i < 6; i++) {
    res.push(getRandomInt(1, 99));
   
  }
  resNum.forEach((numEl, idx) => {
    numEl.innerHTML = res[idx];
  });
});