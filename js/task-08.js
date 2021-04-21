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

let divWidth = 30;
let divHeight = 30;

const divRef = createBoxes();

boxesRef.insertAdjacentHTML('beforeend', divRef);

document.createElement('div');

// const bgcolor = #fffff;


function createBoxes() {
    for (let i = 0; i <= 3; i+=1) {
        
    return `<li>
    <div class="create-div"
    style="background-color: #2a2a2a;
    width: ${divWidth}px;
    height: ${divHeight}px">
    </div>
    </li>
    `;
    divWidth += 10;
        divHeight += 10;
    console.log(i);
    }
}

function destroyBoxes() {
    
}
