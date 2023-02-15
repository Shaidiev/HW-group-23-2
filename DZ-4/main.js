
let increase = document.getElementById('plus');
let resultId = document.getElementById('result');
let decrease = document.getElementById('minus');
let reset = document.getElementById('reset');

increase.addEventListener('click', function(){
    let val = Number(resultId.innerHTML);
    val += 1;
    resultId.innerHTML = val;
    if (val > 0) {
        resultId.style.color = 'green';
    }
});

decrease.addEventListener('click', function(){
    let val = Number(resultId.innerHTML);
    val -= 1;
    resultId.innerHTML = val;
    if (val < 0) {
        resultId.style.color = 'red';
    }
});

reset.addEventListener('click', function(){
    let val = Number(resultId.innerHTML);
    val = 0;
    resultId.innerHTML = val;
    resultId.style.color = 'gray';
});
