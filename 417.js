import test from './test.js';
import Queue from './queue.js';

var pacificAtlantic = function (heights) {
    const rows = heights.length,
        cols = heights[0].length;

    const edges = (check) =>
        Array.from({ length: rows * cols }, (_, i) => {
            const r = Math.floor(i / cols),
                c = i % cols;
            return check(r, c) ? [r, c, heights[r][c]] : null;
        }).filter(Boolean);

    const pacific = edges((r, c) => r === 0 || c === 0);
    const atlantic = edges((r, c) => r === rows - 1 || c === cols - 1);

    const map = new Map();
    const pacificReach = findAdjacentTo(pacific, heights, map);
    const atlanticReach = findAdjacentTo(atlantic, heights, map);

    return pacificReach
        .filter(([r, c, hash]) => map.get(hash) > 1)
        .map(([r, c]) => [r, c]);
};

function findAdjacentTo(ocean, sq, map) {
    const q = new Queue();
    const seen = new Set();
    const res = [];

    for (const [r, c, h] of ocean) {
        const hash = r * sq[0].length + c;
        q.enqueue([r, c, h, hash]);
        seen.add(hash);
    }

    while (q.size() > 0) {
        const [r, c, h, id] = q.dequeue();
        res.push([r, c, id]);
        map.set(id, (map.get(id) ?? 0) + 1);

        for (const [dr, dc] of [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
        ]) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr < 0 || nc < 0) continue;
            if (nr >= sq.length || nc >= sq[0].length) continue;

            const nh = sq[nr][nc];
            if (nh < h) continue;

            const hash = nr * sq[0].length + nc;
            if (seen.has(hash)) continue;

            seen.add(hash);
            q.enqueue([nr, nc, nh, hash]);
        }
    }

    return res;
}

test(
    'case 1',
    pacificAtlantic([
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4],
    ]),
    [
        [0, 4],
        [1, 3],
        [1, 4],
        [2, 2],
        [3, 0],
        [3, 1],
        [4, 0],
    ]
);
test('case 2', pacificAtlantic([[1]]), [[0, 0]]);
