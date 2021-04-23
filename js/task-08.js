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





document.createElement('div');

const amount = [1, 2, 3, 4];

// const bgcolor = #fffff;

const divSettings = [
    {color: '#2a2a2a', width: '30', height: '30'},
    {color: '#000000', width: '40', height: '40'},
    {color: '#2a2a2a', width: '50', height: '50'},
    {color: '#2a2a2a', width: '60', height: '60'},
];


function createBoxes() {
    const creatDivRef = divSettings.map(({color, width, height}) => {
        return `<li>
    <div class="create-div"
    style="background-color: ${color};
    width: ${width}px;
    height: ${height}px">
    </div>
    </li>
    `;
        // divWidth += 10;
        // divHeight += 10;
    });
    
    console.dir(creatDivRef);
    return creatDivRef;
}

function destroyBoxes() {
    
}
const divRef = createBoxes();
boxesRef.insertAdjacentHTML('beforeend', divRef);

console.log(createBoxes())