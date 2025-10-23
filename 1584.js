import { PriorityQueue } from '@datastructures-js/priority-queue';
import test from './test.js';

var minCostConnectPoints = function (points) {
    const n = points.length;
    if (n === 1) return 0;
    const adj = {};

    const checkKey = (obj, key) => {
        if (!Object.hasOwn(obj, key)) {
            obj[key] = [];
        }
    };

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const [x1, y1] = points[i],
                [x2, y2] = points[j];
            const weight = Math.abs(x1 - x2) + Math.abs(y1 - y2);
            const key1 = `${x1},${y1}`,
                key2 = `${x2},${y2}`;

            checkKey(adj, key1);
            checkKey(adj, key2);

            adj[key1].push([weight, key2]);
            adj[key2].push([weight, key1]);
        }
    }

    const heap = new PriorityQueue((a, b) => a[0] - b[0]);
    const start = points[0].join(',');

    for (const nei of adj[start]) {
        const node = nei[1],
            weight = nei[0];
        heap.enqueue([weight, start, node]);
    }
    let sum = 0;
    const seen = new Set();
    seen.add(start);

    while (seen.size < n) {
        const [weight, _src, dst] = heap.dequeue();
        if (seen.has(dst)) {
            continue;
        }
        sum += weight;
        seen.add(dst);

        for (const nei of adj[dst]) {
            const node = nei[1],
                weight = nei[0];

            if (seen.has(node)) continue;

            heap.enqueue([weight, start, node]);
        }
    }

    return sum;
};

test(
    'case 1',
    minCostConnectPoints([
        [0, 0],
        [2, 2],
        [3, 10],
        [5, 2],
        [7, 0],
    ]),
    20
);
test(
    'case 2',
    minCostConnectPoints([
        [3, 12],
        [-2, 5],
        [-4, 1],
    ]),
    18
);
