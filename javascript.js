const container = document.querySelector('#container')

// Generating the initial grid
for (let i = 0; i < 16 ; i++) 
{
    const row = document.createElement('div')
    row.classList.add('row')
    
    container.appendChild(row)
    for (let j = 0; j < 16 ; j++) 
    {
        const column = document.createElement('div')
        column.classList.add('column')
        column.style.padding = "24px"

        row.appendChild(column)
    }
}

// Etching 
const columns = document.querySelectorAll('.column')
columns.forEach(column => column.addEventListener('mouseenter', hoverEvent))

function hoverEvent(e)
{
    e.target.classList.add('hover')
}

// Button
const button = document.querySelector('.btn')
button.addEventListener('click', generateGrid)

//Generate new grid
function generateGrid()
{
    let gridSize = 1
    do {
        gridSize = prompt("Choose Grid Size")
    } while (gridSize < 1 || gridSize > 100);

    container.innerHTML = ""

    let paddingSize = (768 / gridSize / 2).toString() + "px"

    for (let i = 0; i < gridSize; i++) 
    {
        const row = document.createElement('div')
        row.classList.add('row')
        
        container.appendChild(row)
        for (let j = 0; j < gridSize; j++) 
        {
            const column = document.createElement('div')
            column.classList.add('column')
            column.style.padding = paddingSize

            row.appendChild(column)
        }
    }

    const columns = document.querySelectorAll('.column')
    columns.forEach(column => column.addEventListener('mouseenter', hoverEvent))
}