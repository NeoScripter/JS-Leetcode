var minCost = function (colors, neededTime) {
    const n = colors.length;
    let prev = 0,
        spent = 0;

    for (let i = 1; i < n; i++) {
        const curr = colors[i];

        if (curr === colors[prev]) {
            if (neededTime[prev] <= neededTime[i]) {
                spent += neededTime[prev];
                prev = i;
            } else {
                spent += neededTime[i];
            }
        } else {
            prev = i;
        }
    }

    return spent;
};

((colors = 'abaac'), (neededTime = [1, 2, 3, 4, 5]));
