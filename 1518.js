import test from './test.js';

var numWaterBottles = function (numBottles, numExchange) {
    let empty = numBottles;

    while (empty >= numExchange) {
        const canGet = Math.floor(empty / numExchange);
        numBottles += canGet;
        empty %= numExchange;
        empty += canGet;
    }

    return numBottles;
};

test('case 1', numWaterBottles(9, 3), 13);
test('case 2', numWaterBottles(15, 4), 19);
