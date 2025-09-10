

var getNoZeroIntegers = function(n) {
    for (let i = 1; i < n; i++) {
        if (isNoZero(i) && isNoZero(n - i)) {
            return [i, n-i];
        }
    }    
    return -1;
};

function isNoZero(num) {

    while (num > 0) {
        if (num % 10 === 0) {
            return false;
        }
        num = Math.floor(num / 10);
    }

    return true;
}

console.log(isNoZero(4224))
