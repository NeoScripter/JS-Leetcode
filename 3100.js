import test from './test.js';

var maxBottlesDrunk = function (numBottles, numExchange) {
    let empty = numBottles;

    while (empty >= numExchange) {
        while ((empty / numExchange) >= 1) {
            numBottles++;
            empty -= numExchange;
            numExchange++;
            empty++;
        }
    }

    return numBottles;
};

test('case 1', maxBottlesDrunk(13, 6), 15);
test('case 2', maxBottlesDrunk(10, 3), 13);
