var avoidFlood = function (rains) {
    const n = rains.length;
    const fullLakes = new Map();
    const dryDays = [];
    const dried = new Set();
    const ans = Array(n).fill(1);

    for (let i = 0; i < n; i++) {
        const day = rains[i];

        if (day > 0) {
            ans[i] = -1;

            if (fullLakes.has(day)) {
                let idx = fullLakes.get(day);
                let low = 0,
                    high = dryDays.length - 1;
                while (low <= high) {
                    const mid = (low + high) >> 1;

                    if (dryDays[mid] > idx) {
                        high = mid - 1;
                    } else {
                        low = mid + 1;
                    }
                }

                if (low >= dryDays.length) return [];

                ans[dryDays[low]] = day;
                dryDays.splice(j, 1);
            }

            fullLakes.set(day, i);
        } else {
            dryDays.push(i);
        }
    }

    return ans;
};
