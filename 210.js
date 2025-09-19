import test from './test.js';

var findOrder = function (numCourses, prerequisites) {
    const adList = new Map();

    for (let i = 0; i < numCourses; i++) {
        adList.set(i, []);
    }

    for (const [toTake, mustFinish] of prerequisites) {
        adList.get(mustFinish).push(toTake);
    }

    const path = new Set();
    const seen = new Set();

    const order = [];

    function dfs(node) {
        if (path.has(node)) {
            return false;
        }
        if (seen.has(node)) {
            return true;
        }

        path.add(node);

        for (const neighbor of adList.get(node)) {
            const validGraph = dfs(neighbor);

            if (!validGraph) {
                return false;
            }
        }
        order.push(node);
        path.delete(node);
        seen.add(node);

        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return [];
        }
    }

    return order.reverse();
};

test('case 1', findOrder(2, [[1, 0]]), [0, 1]);
test(
    'case 2',
    findOrder(4, [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
    ]),
    [0, 2, 1, 3]
);
test('case 3', findOrder(1, []), [0]);
