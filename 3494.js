import test from './test.js';

var minTime = function (skill, mana) {
    const n = skill.length;
    const time = Array(n).fill(0);

    let now = time[0];

    for (const x of mana) {
        for (let i = 1; i < n; i++) {
            now = Math.max(now + skill[i - 1] * x, time[i]);
        }
        time[n - 1] = now + skill[n - 1] * x;

        for (let i = n - 2; i >= 0; i--) {
            time[i] = time[i + 1] - skill[i + 1] * x;
        }
        now = time[0];
    }

    return time[n - 1];
};

test('case 1', minTime([1, 5, 2, 4], [5, 1, 4, 2]), 110);
test('case 2', minTime([1, 1, 1], [1, 1, 1]), 5);
