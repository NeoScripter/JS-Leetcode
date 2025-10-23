import test from './test.js';
import { PriorityQueue } from '@datastructures-js/priority-queue';

var findItinerary = function (tickets) {
    if (tickets.length === 1) {
        return tickets[0];
    }
    const adj = new Map();

    for (const [from, to] of tickets) {
        if (!adj.has(from)) {
            adj.set(from, []);
        }

        adj.get(from).push(to);
    }

    for (const list of adj.values()) {
        list.sort().reverse();
    }

    const routes = [];

    const dfs = (airport) => {
        const dest = adj.get(airport);

        while (dest && dest.length > 0) {
            dfs(dest.pop());
        }
        routes.push(airport);
    };

    dfs('JFK');

    return routes.reverse();
};

test(
    'case 1',
    findItinerary([
        ['MUC', 'LHR'],
        ['JFK', 'MUC'],
        ['SFO', 'SJC'],
        ['LHR', 'SFO'],
    ]),
    ['JFK', 'MUC', 'LHR', 'SFO', 'SJC']
);
test(
    'case 2',
    findItinerary([
        ['JFK', 'SFO'],
        ['JFK', 'ATL'],
        ['SFO', 'ATL'],
        ['ATL', 'JFK'],
        ['ATL', 'SFO'],
    ]),
    ['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO']
);
