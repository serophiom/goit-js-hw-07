const inputRef = document.querySelector('input');
const boxesRef = document.querySelector('#boxes')
const btnRefs = document.querySelectorAll('button');
const btnCreateRef = btnRefs[0];
const btnDeleteRef = btnRefs[1];
let randomColor = Math.floor(Math.random()*16777215).toString(16);

btnCreateRef.addEventListener('click', createDiv);

btnDeleteRef.addEventListener('click', destroyBoxes);

function createDiv() {
    const divCol = inputRef.value;
    let divWidth = 30;
    let divHeight = 30;
    destroyBoxes();
    for (let i = 1; i <= divCol; i += 1) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        boxesRef.insertAdjacentHTML('beforeend', `<div class="div-class" style="background-color: #${randomColor};
        width: ${divWidth}px;
        height: ${divHeight}px"></div>`);
        divWidth += 10;
        divHeight += 10;
    }
}

function destroyBoxes() {
    boxesRef.innerHTML = '';
}
