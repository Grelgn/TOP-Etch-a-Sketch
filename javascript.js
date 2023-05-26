const container = document.querySelector('#container')

for (let i = 0; i < 16 ; i++) 
{
    const row = document.createElement('div')
    row.classList.add('row')
    // row.textContent = "Yeah"
    
    container.appendChild(row)
    for (let j = 0; j < 16 ; j++) 
    {
        const column = document.createElement('div')
        column.classList.add('column')
        // column.textContent = "Yo"

        row.appendChild(column)


    }
}

const columns = document.querySelectorAll('.column')
columns.forEach(column => column.addEventListener('mouseenter', hoverEvent))

function hoverEvent(e)
{
    e.target.classList.add('hover')
}