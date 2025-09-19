
function printGrid(grid, m) {
    console.log(m)
    for (const row of grid) {
        console.log(row.join(' '));
    }
}


const output = [["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","O","O","O","X","X","X","X","X","X","X","X"],["X","X","X","X","X","O","O","O","X","O","X","O","X","X","X","X","X","X","X","X"],["X","X","X","X","X","O","X","O","X","O","X","O","X","O","X","X","X","X","X","X"],["X","X","X","X","X","O","X","O","O","O","X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","O","X","X","X","X","X","X","X","X","X","X","X","X","X","X"]]
const expected = [["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","O","O","O","X","X","X","X","X","X","X","X"],["X","X","X","X","X","O","O","O","X","O","X","O","X","X","X","X","X","X","X","X"],["X","X","X","X","X","O","X","O","X","O","X","O","O","O","X","X","X","X","X","X"],["X","X","X","X","X","O","X","O","O","O","X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","O","X","X","X","X","X","X","X","X","X","X","X","X","X","X"]];

const grid = [["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","X","X","X","X","O","O","O","X","X","X","X","X","X","X","X"],["X","X","X","X","X","O","O","O","X","O","X","O","X","X","X","X","X","X","X","X"],["X","X","X","X","X","O","X","O","X","O","X","O","O","O","X","X","X","X","X","X"],["X","X","X","X","X","O","X","O","O","O","X","X","X","X","X","X","X","X","X","X"],["X","X","X","X","X","O","X","X","X","X","X","X","X","X","X","X","X","X","X","X"]];

printGrid(grid, 'initial');
printGrid(output, 'output');
printGrid(expected, 'expected');

