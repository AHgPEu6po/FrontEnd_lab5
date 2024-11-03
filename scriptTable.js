const table = document.getElementById('myTable');
const colorPicker = document.getElementById('colorPicker');

function createTable() {
    let number = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 6; j++) {
            const cell = document.createElement('td');
            cell.textContent = number;
            cell.dataset.number = number;
            row.appendChild(cell);
            number++;
        }
        table.appendChild(row);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function handleEvents() {
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        if (cell.dataset.number === '7') {
            cell.addEventListener('mouseenter', () => {
                cell.style.backgroundColor = getRandomColor();
            });

            cell.addEventListener('click', () => {
                cell.style.backgroundColor = colorPicker.value;
            });

            cell.addEventListener('dblclick', () => {
                const rows = document.querySelectorAll('tr');
                let startIndex = Math.floor((cell.cellIndex + 1) / 6);
                for (let i = startIndex + 1; i < rows.length; i += 2) {
                    rows[i].style.backgroundColor = colorPicker.value;
                }
            });
        }
    });
}

createTable();
handleEvents();
