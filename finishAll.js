import test from './test.js';

const finishAll = (jobs, prerequisites) => {
    const prereq = new Map();

    for (const [job, pre] of prerequisites) {
        if (!prereq.has(job)) {
            prereq.set(job, []);
        }
        prereq.get(job).push(pre);
    }

    const seen = new Set(),
        cycle = new Set();

    const dfs = (job) => {
        if (cycle.has(job)) return false;

        if (seen.has(job)) return true;

        cycle.add(job);

        for (const pre of prereq.get(job) || []) {
            if (!dfs(pre)) return false;
        }

        cycle.delete(job);
        seen.add(job);
        return true;
    };

    for (let job = 0; job < jobs; job++) {
        if (!dfs(job)) return false;
    }

    return true;
};

test('case 1', finishAll(2, [[1, 0]]), true);
test(
    'case 2',
    finishAll(2, [
        [1, 0],
        [0, 1],
    ]),
    false
);
test(
    'case 3',
    finishAll(3, [
        [1, 0],
        [2, 1],
    ]),
    true
);
test('case 4', finishAll(1, []), true);
test(
    'case 5',
    finishAll(11, [
        [6, 10],
        [4, 3],
        [9, 2],
        [2, 3],
        [6, 1],
        [2, 8],
        [10, 1],
        [10, 2],
        [5, 3],
        [0, 10],
        [7, 4],
        [6, 1],
    ]),
    true
);
