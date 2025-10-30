
var minNumberOperations = function(target) {
    let ops = target[0];
    const n = target.length;

    for (let i = 1; i < n; i++) {
        const curr = target[i], prev = target[i - 1];
        if (curr > prev) {
            ops += curr - prev;
        } 
    }

    return ops;
};
