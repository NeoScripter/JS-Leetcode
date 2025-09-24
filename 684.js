import test from './test.js';

var findRedundantConnection = function (edges) {
    const adj = new Map();
    const seen = new Set();
    const cycle = new Set();

    for (const [l, r] of edges) {
        adj.set(l, [r, ...(adj.get(l) ?? [])]);
        adj.set(r, [l, ...(adj.get(r) ?? [])]);
    }

    let cycleStart = -1;

    const dfs = (node, par) => {
        if (seen.has(node)) {
            cycleStart = node;
            return true;
        }

        seen.add(node);
        for (const nei of adj.get(node)) {
            if (nei === par) continue;

            if (dfs(nei, node)) {
                if (cycleStart !== -1) cycle.add(node);
                if (cycleStart === node) {
                    cycleStart = -1;
                }
                return true;
            }
        }
        return false;
    };

    dfs(1, -1);

    for (let i = edges.length - 1; i >= 0; i--) {
        const [v, u] = edges[i];
        if (cycle.has(v) && cycle.has(u)) {
            return [v, u];
        }
    }

    return [];
};

test(
    'case 1',
    findRedundantConnection([
        [1, 2],
        [1, 3],
        [2, 3],
    ]),
    [2, 3]
);
test(
    'case 2',
    findRedundantConnection([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 4],
        [1, 5],
    ]),
    [1, 4]
);
