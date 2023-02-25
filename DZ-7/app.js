let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let timeout = document.querySelector('#timeout');
let loading = document.querySelector('.timer-image')
let stopIn;
let i = 60;

const timer = () => {
  const chase = () => {
    stopIn = setInterval(function() {
      i--;
      timeout.innerHTML = i;

      if (i <= 0) {
        clearInterval(stopIn);
        loading.style.animation = "none";
      }
    }, 1000);

    loading.style.animation = "spin 2s linear infinite";
  }

  start.addEventListener('click', () => {
    if (i === 0) {
      i = 60;
    }
    chase();
  });

  stop.addEventListener('click', () => {
    clearInterval(stopIn);
    loading.style.animation = "none";
  });
}

timer();


