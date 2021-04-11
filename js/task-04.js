const counterValueEl = document.querySelector('#value');
const counterValue = counterValueEl.textContent;
console.log(counterValue);
console.log()

const incrementBtn = document.querySelector('dataset');
console.log(incrementBtn);

// decrement

function increment () {
    console.log('Это increment');
    counterValue += 1;
};

function decrement () {
    console.log('Это decrement');
    // counterValue -= 1;
    const counterValue = counterValueEl.textContent;
    counterValueEl.textContent += 1;
};

// incrementBtn.addEventListener('click', decrement);
// incrementBtn.addEventListener('click', increment);





console.log(counterValue);

