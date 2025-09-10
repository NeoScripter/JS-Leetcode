import test from './test.js';

function evalAlgebra(exp) {
    const nums = exp.match(/-?\d+/g).map(Number);

    const candidates = [
        nums[0] + nums[1],
        nums[0] - nums[1],
        nums[1] - nums[0],
        -(nums[0] + nums[1]),
    ];

    const equation = exp.replace("=", "===");

    for (let cand of candidates) {
        if (eval(equation.replace("x", cand))) {
            return cand;
        }
    }

    return -1;
}
test('case 1', evalAlgebra("2 + x = 19"), 17);
test('case 1', evalAlgebra("4 - x = 1"), 3);
test('case 2', evalAlgebra("x + 10 = 53"), 43);
test('case 3', evalAlgebra("-23 + x = -20"), 3);
test('case 4', evalAlgebra("10 + x = 5"), -5);
test('case 5', evalAlgebra("-49 - x = -180"), 131);
test('case 6', evalAlgebra("x - 22 = -56"), -34);
test('case 7', evalAlgebra("2 + x = 19"), 17);
test('case 8', evalAlgebra("x - 5 = 0"), 5);
test('case 9', evalAlgebra("100 + x = 50"), -50);
test('case 10', evalAlgebra("-x + 7 = 2"), 5);
