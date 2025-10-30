import test from './test.js';

const nomNom = (arr) => {
    const stack = [];

    for (const num of arr) {
        if (stack.length === 0) {
            stack.push(num);
            continue;
        }
        if (stack.at(-1) > num) {
            stack.push(stack.pop() + num);
        } else {
            stack.push(num);
        }
    }

    return stack;
};

test('case 1', nomNom([5, 3, 7]), [15]);
test('case 2', nomNom([5, 3, 9]), [8, 9]);
test('case 3', nomNom([1, 2, 3]), [1, 2, 3]);
test('case 4', nomNom([2, 1, 3]), [3, 3]);
test('case 5', nomNom([8, 5, 9]), [22]);
test('case 6', nomNom([6, 5, 6, 100]), [17, 100]);
