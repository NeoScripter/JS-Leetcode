var makeTheIntegerZero = function (num1, num2) {
    let k = 1;
    while (true) {
        let x = BigInt(num1) - BigInt(num2) * BigInt(k);
        if (x < BigInt(k)) {
            return -1;
        }
        if (k >= countSetBits(x)) {
            return k;
        }
        k++;
    }
};

function countSetBits(n) {
    let count = 0;
    while (n !== 0n) {
        count++;
        n &= n - 1n;
    }
    return count;
}
