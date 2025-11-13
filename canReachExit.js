import test from './test.js';

function canReachExit(grid) {
    const seen = new Set('0|0'),
        ways = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ],
        rows = grid.length,
        cols = grid[0].length;

    const dfs = (r, c) => {
        if (grid[r][c] === 'E') return true;

        for (const [incR, incC] of ways) {

            const [newR, newC] = [incR + r, incC + c];

            if (Math.min(newC, newR) < 0) continue;
            if (newC >= cols || newR >= rows) continue;
            if (grid[newR][newC] === '#') continue;

            const hash = `${newR}|${newC}`;
            if (seen.has(hash)) continue;

            seen.add(hash);
            if (dfs(newR, newC)) return true;
        }
        return false;
    };

    return dfs(0, 0);
}

test('case 1', canReachExit(['@..', '.#E', '...']), true);
test('case 2', canReachExit(['@#E']), false);
test('case 3', canReachExit(['@.#.', '..#E', '####']), false);
test('case 4', canReachExit(['@...', '.###', '...E']), true);
