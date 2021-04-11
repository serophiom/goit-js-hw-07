const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('h1 > span');
console.log(spanRef);
console.log(inputRef);



inputRef.addEventListener('input', onInputChange);


function onInputChange (event) {
   console.log(event.currentTarget.value);
   spanRef.textContent = event.currentTarget.value;
   if (spanRef.textContent === '') {
       spanRef.textContent = 'незнакомец';
   }
}
