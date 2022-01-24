const grid = document.querySelector('.grid');
let gridValue = document.querySelector(".grid-size");
let gridSize = document.querySelector("input"); //Need to create the input first, for now, i'll hard code it to 8
let squareSize = 8;
let resetGridSize = document.querySelector('.reset');
createGrid(squareSize);

function square(size){
    const square = document.createElement("div");
    square.style.width = `${size}px`;
    square.style.length = `${size}px`;
    square.classList.add('box');
    square.style.border = "5px solid black";
    square.style.margin = "2px 2px 2px 2px";
    return square;
}

function createGrid(gridSize)
{
    for (let i = 0; i < gridSize; i++)
    {
        for (let j = 0; j < gridSize; j++)
        {
            grid.appendChild(square(grid.clientWidth / gridSize));
        }
    }
}

grid.addEventListener('mouseover', function(e){
        if (e.target.matches('.box'))
        {
            e.target.classList.add("active");
        }

        
    });


function reset()
{
    while (grid.firstChild)
    {
        grid.removeChild(grid.lastChild);
    }

    createGrid(squareSize);
}

gridSize.addEventListener('input', function(e)
{
    squareSize = e.target.value;
    gridValue.textContent = `${squareSize}x${squareSize}`;
})

resetGridSize.addEventListener("click", function()
{
    reset();
});

resetBtn.addEventListener('click', reset);