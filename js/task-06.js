const inputRef = document.querySelector('#validation-input');
inputRef.classList.add();

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur () {
    if (inputRef.value.length === Number(inputRef.dataset.length)) {
      inputRef.className = 'valid';
    } else {
        inputRef.className = 'invalid';
    }
}