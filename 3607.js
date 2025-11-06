import { PriorityQueue } from '@datastructures-js/priority-queue';

class UnionFind {
    constructor(n) {
        this.par = new Map();
        this.rank = new Map();

        for (let i = 1; i < n + 1; i++) {
            this.par.set(i, i);
            this.rank.set(i, 0);
        }
    }

    find(x) {
        if (this.par.get(x) !== x) {
            this.par.set(x, this.find(this.par.get(x)));
        }
        return this.par.get(x);
    }

    union(n1, n2) {
        let p1 = this.find(n1),
            p2 = this.find(n2);
        if (p1 == p2) {
            return false;
        }

        if (this.rank.get(p1) > this.rank.get(p2)) {
            this.par.set(p2, p1);
        } else if (this.rank.get(p1) < this.rank.get(p2)) {
            this.par.set(p1, p2);
        } else {
            this.par.set(p1, p2);
            this.rank.set(p2, this.rank.get(p2) + 1);
        }
        return true;
    }
}

var processQueries = function (c, connections, queries) {
    const backups = new Map(),
        union = new UnionFind(c);

    for (const [u, v] of connections) {
        union.union(u, v);
    }

    for (let s = 1; s <= c; s++) {
        const r = union.find(s);
        if (!backups.has(r)) backups.set(r, new PriorityQueue((a, b) => a - b));
        backups.get(r).push(s);
    }

    const offline = new Set(),
        res = [];

    for (const [req, station] of queries) {
        if (req === 2) {
            offline.add(station);
        } else {
            if (!offline.has(station)) {
                res.push(station);
                continue;
            }

            const comp = union.find(station);
            const pq = backups.get(comp);

            while (!pq.isEmpty() && offline.has(pq.front())) {
                pq.pop();
            }
            res.push(pq.isEmpty() ? -1 : pq.front());
        }
    }

    return res;
};

const c = 5;
const connections = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
];
const queries = [
    [1, 3],
    [2, 1],
    [1, 1],
    [2, 2],
    [1, 2],
];

// Output: [3,2,3];

console.log(processQueries(c, connections, queries));
