
const container = document.querySelector('.container');
const gridBox = document.createElement('div');
gridBox.classList.add('grid-box');
const sideBar = document.querySelector('.side-bar');
const newGridBtn = document.querySelector('.new-grid');
const gridInput = document.querySelector('.grid-input');


//creates a 16 x 16 grid
for(let i  = 0; i < 256; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add('grid-box');
    container.appendChild(gridBox);
}


newGridBtn.addEventListener('click', newGridApply);



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




