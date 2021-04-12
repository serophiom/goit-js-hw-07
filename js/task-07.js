const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
spanEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', onValueChange);

function onValueChange () {
    spanEl.style.fontSize = `${inputEl.value}px`; 
}