var countUnguarded = function (m, n, guards, walls) {
    const grid = Array.from({ length: m }, () => Array(n).fill('.'));
    const ways = [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
    ];

    const markSeen = ([r, c], [x, y]) => {
        while (Math.min(r, c) >= 0 && r < m && c < n) {
            if (['w', 'g'].includes(grid[r][c])) break;

            grid[r][c] = 's';

            r += x;
            c += y;
        }
    };

    for (const [r, c] of walls) {
        grid[r][c] = 'w';
    }

    for (const [r, c] of guards) {
        grid[r][c] = 'g';
    }

    for (const [r, c] of guards) {
        for (const [x, y] of ways) {
            markSeen([r + x, c + y], [x, y]);
        }
    }

    return grid.flat().filter((c) => c === '.').length;
};

console.log(
    countUnguarded(
        4,
        6,
        [
            [0, 0],
            [1, 1],
            [2, 3],
        ],
        [
            [0, 1],
            [2, 2],
            [1, 4],
        ]
    )
);
