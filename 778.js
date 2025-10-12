var swimInWater = function (grid) {
    let rows = grid.length,
        cols = grid[0].length;
    const heap = new PriorityQueue((a, b) => a[0] - b[0]);

    const seen = new Set();

    let sum = 0;

    const ways = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];

    heap.enqueue([grid[0][0], 0, 0]);

    while (!heap.isEmpty()) {
        const [w, r, c] = heap.dequeue();

        let hash = r * cols + c;
        if (seen.has(hash)) continue;

        seen.add(hash);

        sum = Math.max(sum, w);

        if (r === rows - 1 && c === cols - 1) return sum;

        for (let delta of ways) {
            let nr = delta[0] + r,
                nc = delta[1] + c;

            if (Math.min(nr, nc) < 0) continue;
            if (nr >= rows || nc >= cols) continue;

            heap.enqueue([grid[nr][nc], nr, nc]);
        }
    }

    return sum;
};
