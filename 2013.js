var DetectSquares = function () {
    this.coords = new Map();
    this.yAxis = new Map();
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
    const x = point[0],
        y = point[1];

    const hash = `${x},${y}`;
    this.coords.set(hash, (this.coords.get(hash) ?? 0) + 1);
    this.yAxis.set(y, [...(this.yAxis.get(y) ?? []), x]);
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
    const [x, y] = point;
    let sum = 0;

    for (const newX of this.yAxis.get(y) ?? []) {
        if (newX === x) continue;
        const dist = Math.abs(x - newX);

        sum +=
            (this.coords.get(`${x},${y + dist}`) ?? 0) *
            (this.coords.get(`${newX},${y + dist}`) ?? 0);

        sum +=
            (this.coords.get(`${x},${y - dist}`) ?? 0) *
            (this.coords.get(`${newX},${y - dist}`) ?? 0);
    }

    return sum;
};
