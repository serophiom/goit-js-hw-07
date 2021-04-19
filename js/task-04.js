const counterValueEl = document.querySelector('#value');
let counterValue = Number(counterValueEl.textContent);

const counterBtnAll = document.querySelectorAll('button');
console.log(counterBtnAll[0]);
console.log(counterBtnAll[1]);

function increment () {
    console.log('Это increment');
    counterValue += 1;
    counterValueEl.textContent = counterValue;
};

function decrement () {
    console.log('Это decrement');
    counterValue -= 1;
    counterValueEl.textContent = counterValue;   
};

counterBtnAll[0].addEventListener('click', decrement);
counterBtnAll[1].addEventListener('click', increment);