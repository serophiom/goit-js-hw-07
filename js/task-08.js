const inputRef = document.querySelector('input');
const boxesRef = document.querySelector('#boxes')
const btnRefs = document.querySelectorAll('button');
const btnCreateRef = btnRefs[0];
const btnDeleteRef = btnRefs[1];
console.log(inputRef);
const divCol = inputRef.value;
console.log(divCol);
console.log(btnRefs);
console.log(btnCreateRef);
console.log(btnDeleteRef);
console.log(boxesRef);

const divRef = createBoxes();

boxesRef.insertAdjacentHTML('beforeend', divRef);

document.createElement('div');


function createBoxes() {
    return `
    <div style="background-color: #f44336">
    </div>
    `;
}

function destroyBoxes() {
    
}
