var largestTriangleArea = function (points) {
    let max = 0;

    for (let x of points) {
        for (let y of points) {
            for (let z of points) {
                const [x1, x2, x3, y1, y2, y3] = [
                    x[0],
                    y[0],
                    z[0],
                    x[1],
                    y[1],
                    z[1],
                ];
                const area =
                    Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) /
                    2;
                max = Math.max(max, area);
            }
        }
    }

    return max;
};
