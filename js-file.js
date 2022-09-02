
const container = document.querySelector('.container');
const gridBox = document.createElement('div');
gridBox.classList.add('grid-box');
const sideBar = document.querySelector('.side-bar');
const newGridBtn = document.querySelector('.new-grid');
const gridInput = document.querySelector('.grid-input');
const eraseMode = document.querySelector('.eraser');
const colorMode = document.querySelector('.color');



newGridBtn.addEventListener('click', newGridApply);
eraseMode.addEventListener('click', eraseModeActivate);
colorMode.addEventListener('click', colorModeActivate);




let valueMultiply = 256;
let isColorMode = true;


//creates a 16 x 16 grid default
for(let i  = 0; i < 256; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add('grid-box');
    container.appendChild(gridBox);
}

gridColorChange();




function newGridApply() {
    reset();
    var value = gridInput.value;
    value = Number(value.substring(0, 2));
    valueMultiply = idealGridValue(value);
    for(let i = 0; i < valueMultiply; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        container.appendChild(gridBox);
    }
    container.setAttribute('style', `display: grid;  grid-template-columns: repeat(${value}, auto); grid-template-rows: repeat(${value}, auto)`);
    gridColorChange();
}




// fixes any spaces or upper case issues written by the user
function idealGridValue(value) {
    const valueMultiply  = value * value;
    return valueMultiply;
}


function reset() {
    document.querySelectorAll(".grid-box")
    .forEach((e) => e.parentNode.removeChild(e));
}


function gridColorChange() {
    if(isColorMode == true) {
        document.querySelectorAll('.grid-box').forEach(e => {
            e.addEventListener('mouseenter', () => { e.setAttribute('style', 
            'background-color: black;')
            });
        });
    }  
    
    else {
        document.querySelectorAll('.grid-box').forEach(e => {
            e.addEventListener('mouseenter', () => { e.setAttribute('style', 
            'background-color: white;')
            });
        });
    }


}


function eraseModeActivate() {
    isColorMode = false;
    gridColorChange();
}

function colorModeActivate() {
    isColorMode = true;
    gridColorChange();
}


   





