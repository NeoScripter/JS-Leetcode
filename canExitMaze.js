import test from './test.js';

function canExit(maze) {
    const rows = maze.length;
    const cols = maze[0].length;

    const seen = new Set();

    function dfs(r, c) {
        if (Math.min(r, c) < 0) return false;
        if (r >= rows || c >= cols) return false;
        if (maze[r][c] !== 0) return false;
        const hash = r * cols + c;
        if (seen.has(hash)) return false;
        seen.add(hash);
        if (r === rows - 1 && c === cols - 1) return true;

        let res = false;
        for (const [rx, cx] of [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ]) {
            const nr = r + rx;
            const nc = c + cx;

            res ||= dfs(nr, nc);
        }

        return res;
    }

    return dfs(0, 0);
}

test(
    'case 1',
    canExit([
        [0, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 0, 0, 1],
        [1, 1, 1, 1, 1, 0, 0],
    ]),
    true
);
test(
    'case 2',
    canExit([
        [0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0, 0, 0],
        [1, 0, 0, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 0],
    ]),
    true
);
test(
    'case 3',
    canExit([
        [0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
    ]),
    false
);
test(
    'case 4',
    canExit([
        [0, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 1],
        [1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 1, 0, 0, 1],
        [1, 1, 0, 0, 1, 1, 1],
    ]),
    false
);
