import test from './test.js';
import { PriorityQueue } from '@datastructures-js/priority-queue';

var findCheapestPrice = function (n, flights, src, dst, k) {
    const adj = new Map();

    for (let i = 0; i < n; i++) {
        adj.set(i, []);
    }

    for (const [start, end, w] of flights) {
        adj.get(start).push([w, end]);
    }

    const heap = new PriorityQueue((a, b) => a[0] - b[0]);

    heap.enqueue([0, src, 0]);

    const dist = Array.from({ length: n }, () => Array(k + 2).fill(Infinity));
    dist[src][0] = 0;

    while (!heap.isEmpty()) {
        const [weight, from, stops] = heap.dequeue();

        if (from === dst) return weight;
        if (stops > k) continue;

        for (const [w, node] of adj.get(from)) {
            const cost = w + weight;
            if (cost < dist[node][stops + 1]) {
                dist[node][stops + 1] = cost;
                heap.enqueue([cost, node, stops + 1]);
            }
        }
    }
    return -1;
};

test(
    'case 1',
    findCheapestPrice(
        4,
        [
            [0, 1, 100],
            [1, 2, 100],
            [2, 0, 100],
            [1, 3, 600],
            [2, 3, 200],
        ],
        0,
        3,
        1
    ),
    700
);
test(
    'case 2',
    findCheapestPrice(
        3,
        [
            [0, 1, 100],
            [1, 2, 100],
            [0, 2, 500],
        ],
        0,
        2,
        1
    ),
    200
);
test(
    'case 3',
    findCheapestPrice(
        3,
        [
            [0, 1, 100],
            [1, 2, 100],
            [0, 2, 500],
        ],
        0,
        2,
        0
    ),
    500
);
