import test from './test.js';
import { PriorityQueue } from '@datastructures-js/priority-queue';

var trapRainWater = function (heightMap) {
    const ways = [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
    ];
    const rows = heightMap.length,
        cols = heightMap[0].length;

    let sum = 0;

    const heap = new PriorityQueue((a, b) => a[0] - b[0]);
    const seen = new Set();

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (Math.min(c, r) !== 0 && c !== cols - 1 && r !== rows - 1)
                continue;

            const hash = r * cols + c;
            seen.add(hash);
            heap.enqueue([heightMap[r][c], r, c]);
        }
    }

    while (!heap.isEmpty()) {
        const [h, r, c] = heap.dequeue();

        for (const [xr, xc] of ways) {
            const nr = r + xr,
                nc = c + xc;

            if (Math.min(nr, nc) < 0) continue;
            if (nr >= rows || nc >= cols) continue;

            const hash = nr * cols + nc;
            if (seen.has(hash)) continue;

            let nei = heightMap[nr][nc];

            if (nei < h) {
                const water = h - nei;
                sum += water;
                nei = h;
            }

            seen.add(hash);
            heap.enqueue([nei, nr, nc]);
        }
    }

    return sum;
};
test(
    'case 1',
    trapRainWater([
        [1, 4, 3, 1, 3, 2],
        [3, 2, 1, 3, 2, 4],
        [2, 3, 3, 2, 3, 1],
    ]),
    4
);
test(
    'case 2',
    trapRainWater([
        [3, 3, 3, 3, 3],
        [3, 2, 2, 2, 3],
        [3, 2, 1, 2, 3],
        [3, 2, 2, 2, 3],
        [3, 3, 3, 3, 3],
    ]),
    10
);
