const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('h1 > span');

inputRef.addEventListener('input', onInputChange);

function onInputChange (event) {
   spanRef.textContent = event.currentTarget.value;
   if (spanRef.textContent === '') {
       spanRef.textContent = 'незнакомец';
   }
}
