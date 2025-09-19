import test from './test.js';
import { MinPriorityQueue } from '@datastructures-js/priority-queue';

var minInterval = function (intervals, queries) {
    intervals.sort((a, b) => a[0] - b[0]);

    const qs = queries.map((q, idx) => [q, idx]).sort((a, b) => a[0] - b[0]);

    const heap = new MinPriorityQueue((x) => x[0]);

    let i = 0;
    const ans = new Array(qs.length);

    for (let [q, idx] of qs) {
        while (i < intervals.length && intervals[i][0] <= q) {
            const [st, end] = intervals[i];
            heap.enqueue([end - st + 1, end]);
            i++;
        }

        while (!heap.isEmpty() && heap.front()[1] < q) {
            heap.dequeue();
        }

        ans[idx] = heap.isEmpty() ? -1 : heap.front()[0];
    }

    return ans;
};

function bs(arr, q) {
    let left = 0;
    let right = arr.length - 1;
    let best = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid][0] >= q) {
            best = arr[mid];
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return best === -1 ? best : best[1] - best[0] + 1;
}

test(
    'case 1',
    minInterval(
        [
            [1, 4],
            [2, 4],
            [3, 6],
            [4, 4],
        ],
        [2, 3, 4, 5]
    ),
    [3, 3, 1, 4]
);

test(
    'case 2',
    minInterval(
        [
            [2, 3],
            [2, 5],
            [1, 8],
            [20, 25],
        ],
        [2, 19, 5, 22]
    ),
    [2, -1, 4, 6]
);
