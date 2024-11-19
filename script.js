document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('responsibility-matrix');
    const addColumnBtn = document.getElementById('add-column');
    const addRowBtn = document.getElementById('add-row');

    // Add new column
    addColumnBtn.addEventListener('click', () => {
        const headerRow = table.querySelector('thead tr');
        const newHeader = document.createElement('th');
        newHeader.contentEditable = "true";
        newHeader.textContent = "New Column";
        headerRow.appendChild(newHeader);

        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const newCell = document.createElement('td');
            newCell.contentEditable = "true";
            newCell.textContent = "I"; // Default value
            newCell.classList.add('role', 'i');
            row.appendChild(newCell);
        });
    });

    // Add new row
    addRowBtn.addEventListener('click', () => {
        const tbody = table.querySelector('tbody');
        const rowCount = tbody.rows[tbody.rows.length - 1].cells.length;
        const newRow = document.createElement('tr');

        for (let i = 0; i < rowCount; i++) {
            const newCell = document.createElement('td');
            newCell.contentEditable = "true";
            if (i === 0) {
                newCell.textContent = "New Task";
            } else {
                newCell.textContent = "I"; // Default value
                newCell.classList.add('role', 'i');
            }
            newRow.appendChild(newCell);
        }
        tbody.appendChild(newRow);
    });

    // Editable cell functionality
    table.addEventListener('click', (event) => {
        const cell = event.target;

        // Only editable if it's a cell in the table
        if (cell.tagName === 'TD' || cell.tagName === 'TH') {
            cell.focus();
        }
    });
});
