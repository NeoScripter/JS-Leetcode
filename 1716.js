import test from './test.js';

var totalMoney = function (n) {
    let sum = 0,
        price = 0;
    while (n > 0) {
        const days = n >= 7 ? 7 : n;

        for (let day = 1; day <= days; day++) {
            sum += day + price;
        }

        price++;
        n -= 7;
    }

    return sum;
};

test('case 1', totalMoney(4), 10);
test('case 2', totalMoney(10), 37);
test('case 3', totalMoney(20), 96);
