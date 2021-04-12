const counterValueEl = document.querySelector('#value');
let counterValue = Number(counterValueEl.textContent);
console.log(counterValue);
console.log()

const counterBtnAll = document.querySelectorAll('button');

// const decrementBtn = document.querySelector('#dataset.decrement');
console.log(counterBtnAll[0]);

// const incrementBtn = document.querySelector('button');
console.log(counterBtnAll[1]);

// decrement

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





console.log(counterValue);

