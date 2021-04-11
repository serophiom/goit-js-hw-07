const inputRef = document.querySelector('#validation-input');
inputRef.classList.add();
// const inputDataLength = '[inputRef.dataset.length]';
console.log(inputRef);
// console.log(inputDataLength);

// inputRef.className = "q25245";

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur () {
    if (inputRef.value.length == inputRef.dataset.length) {
    //   inputRef.classList.add('valid');
      inputRef.className = 'valid';
      console.log('Потеря инпута invalid');
    } else {

        // inputRef.classList.add('invalid');
        inputRef.className = 'invalid';

        // console.log(inputRef.value.length);
        // console.log(inputRef.dataset.length);

    }
    
    console.log(inputRef.value.length);
    console.log(inputRef.dataset.length);
    console.log(inputRef.value.length == inputRef.dataset.length);
    console.log(inputRef);
}



// console.log(inputRef.dataset.length);



