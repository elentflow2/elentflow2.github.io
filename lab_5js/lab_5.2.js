let flag = document.body.firstElementChild;
for (let i = 1; i < flag.rows.length - 1 ; i++){
    let row = flag.rows[i];
    for (let j = 1; j < row.cells.length - 2; j += 2) {
        row.cells[((i + 1) % 2) + j].style.backgroundColor = '#ffce9e';
        row.cells[((i + 2) % 2) + j].style.backgroundColor = '#d18b47';
    }
}
