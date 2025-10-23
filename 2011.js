var finalValueAfterOperations = function (operations) {
    let sum = 0;

    for (const op of operations) {
        if (op.includes('--')) {
            sum--;
        } else {
            sum++;
        }
    }

    return sum;
};
