import test from './test.js';

var peopleAwareOfSecret = function (n, delay, forget) {
    const MOD = 10e9 + 7;
    const memo = Array.from({ length: n + 1 }, () => -1);

    function countFrom(day) {
        if (day > n) {
            return 0;
        }
        if (memo[day] !== -1) {
            return memo[day];
        }

        let alive = 0;
        if (day + forget > n) {
            alive++;
        }

        const start = day + delay;
        const end = Math.min(n, day + forget - 1);

        for (let s = start; s <= end; s++) {
            alive += countFrom(s);
        }

        memo[day] = alive;
        return alive;
    }

    return countFrom(1);
};

test('case 1', peopleAwareOfSecret(6, 2, 4), 5);
test('case 2', peopleAwareOfSecret(4, 1, 3), 6);
