const inputRef = document.querySelector('#validation-input');
inputRef.classList.add();
console.log(inputRef);

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur () {
    if (inputRef.value.length === Number(inputRef.dataset.length)) {
      inputRef.className = 'valid';
      console.log('Потеря инпута invalid');
    } else {
        inputRef.className = 'invalid';
    }
    
    console.log(inputRef.value.length);
    console.log(inputRef.dataset.length);
    console.log(inputRef.value.length == inputRef.dataset.length);
    console.log(inputRef);
}