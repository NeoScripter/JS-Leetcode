var findClosestElements = function (arr, k, x) {
    let l = 0,
        r = arr.length - 1;

    while (r - l >= k) {
        if (Math.abs(x - arr[l]) <= Math.abs(x - arr[r])) {
            r--;
        } else {
            l++;
        }
    }

    return arr.slice(l, r + 1);
};
