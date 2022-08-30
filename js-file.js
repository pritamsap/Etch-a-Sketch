
const grid = document.createElement("div");
const container = document.querySelector('.container');
const hoverEffect = document.querySelector('.each-grid:hover')


for(let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.classList.add('each-grid');
    container.appendChild(grid);
}


const grids = document.querySelectorAll('.each-grid');

grids.forEach((eachGrid) => {

    eachGrid.addEventListener('mousedown', () => {
        eachGrid.setAttribute('style', 'background-color: black;');

    });


    
    
});

















