import test from './test.js';

function findPath(tickets) {
    const adj = new Map();

    for (const [src, dst] of tickets) {
        if (!adj.has(src)) {
            adj.set(src, []);
        }

        adj.get(src).push(dst);
    }

    for (const fligths of adj.values()) {
        fligths.sort().reverse();
    }

    const routes = [];
    const dfs = (airport) => {
        const dest = adj.get(airport);

        if (dest && dest.length > 0) {
            const city = dest.pop();
            dfs(city);
        }

        routes.push(airport);
    };

    dfs('A');

    return routes.reverse();
}

test(
    'case 1',
    findPath([
        ['C', 'F'],
        ['A', 'C'],
        ['I', 'Z'],
        ['F', 'I'],
    ]),
    ['A', 'C', 'F', 'I', 'Z']
);
test(
    'case 2',
    findPath([
        ['A', 'C'],
        ['A', 'B'],
        ['C', 'B'],
        ['B', 'A'],
        ['B', 'C'],
    ]),
    ['A', 'B', 'A', 'C', 'B', 'C']
);
test(
    'case 3',
    findPath([
        ['Y', 'L'],
        ['D', 'A'],
        ['A', 'D'],
        ['R', 'Y'],
        ['A', 'R'],
    ]),
    ['A', 'D', 'A', 'R', 'Y', 'L']
);
