import test from './test.js';
import { PriorityQueue } from '@datastructures-js/priority-queue';

var networkDelayTime = function (times, n, k) {
    const map = new Map();

    for (let i = 1; i <= n; i++) {
        map.set(i, []);
    }

    for (const [src, dest, w] of times) {
        const nei = map.get(src);
        nei.push([w, dest]);
        map.set(src, nei);
    }

    if (map.size < n) return -1;

    const seen = new Set([k]);
    const q = new PriorityQueue((a, b) => a[0] - b[0]);

    for (const nei of map.get(k)) {
        q.enqueue(nei);
    }

    while (!q.isEmpty()) {
        const [weight, node] = q.dequeue();

        if (seen.has(node)) continue;
        seen.add(node);

        if (seen.size === n) return weight;

        for (const [w, dest] of map.get(node)) {
            q.enqueue([w + weight, dest]);
        }
    }

    return -1;
};

test(
    'case 1',
    networkDelayTime(
        [
            [2, 1, 1],
            [2, 3, 1],
            [3, 4, 1],
        ],
        4,
        2
    ),
    2
);
test('case 2', networkDelayTime([[1, 2, 1]], 2, 1), 1);
test('case 3', networkDelayTime([[1, 2, 1]], 2, 2), -1);
