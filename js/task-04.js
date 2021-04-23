const counterValueEl = document.querySelector('#value');
let counterValue = Number(counterValueEl.textContent);

const counterBtnAll = document.querySelectorAll('button');

function increment () {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
};

function decrement () {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;   
};

counterBtnAll[0].addEventListener('click', decrement);
counterBtnAll[1].addEventListener('click', increment);