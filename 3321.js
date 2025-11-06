import { PriorityQueue } from '@datastructures-js/priority-queue';

var findXSum = function (nums, k, x) {
    const n = nums.length;
    const ans = [];
    const freq = new Map();

    const inTop = new Set();
    let topSum = 0;

    const topSet = new Map();
    const restSet = new Map();

    const addToSet = (map, f, val) => {
        if (!map.has(f)) map.set(f, new Set());
        map.get(f).add(val);
    };

    const removeFromSet = (map, f, val) => {
        if (map.has(f)) {
            map.get(f).delete(val);
            if (map.get(f).size === 0) map.delete(f);
        }
    };

    const getMax = (map) => {
        if (map.size === 0) return null;
        const maxFreq = Math.max(...map.keys());
        const values = Array.from(map.get(maxFreq));
        return [maxFreq, Math.max(...values)];
    };

    const getMin = (map) => {
        if (map.size === 0) return null;
        const minFreq = Math.min(...map.keys());
        const values = Array.from(map.get(minFreq));
        return [minFreq, Math.min(...values)];
    };

    const moveToTop = (f, val) => {
        removeFromSet(restSet, f, val);
        addToSet(topSet, f, val);
        inTop.add(val);
        topSum += val * f;
    };

    const moveToRest = (f, val) => {
        removeFromSet(topSet, f, val);
        addToSet(restSet, f, val);
        inTop.delete(val);
        topSum -= val * f;
    };

    const rebalance = () => {
        while (inTop.size < x) {
            const max = getMax(restSet);
            if (!max) break;
            const [f, val] = max;
            if (!freq.has(val)) continue;
            moveToTop(f, val);
        }

        while (true) {
            const topMin = getMin(topSet);
            const restMax = getMax(restSet);

            if (!topMin || !restMax) break;
            const [tf, tv] = topMin;
            const [rf, rv] = restMax;

            if (rf > tf || (rf === tf && rv > tv)) {
                moveToRest(tf, tv);
                moveToTop(rf, rv);
            } else {
                break;
            }
        }
    };

    const updateElement = (num, delta) => {
        const oldFreq = freq.get(num) || 0;
        const newFreq = oldFreq + delta;

        if (newFreq === 0) {
            freq.delete(num);
            if (inTop.has(num)) {
                removeFromSet(topSet, oldFreq, num);
                inTop.delete(num);
                topSum -= num * oldFreq;
            } else {
                removeFromSet(restSet, oldFreq, num);
            }
        } else {
            freq.set(num, newFreq);

            if (inTop.has(num)) {
                removeFromSet(topSet, oldFreq, num);
                topSum -= num * oldFreq;
                addToSet(topSet, newFreq, num);
                topSum += num * newFreq;
            } else if (oldFreq > 0) {
                removeFromSet(restSet, oldFreq, num);
                addToSet(restSet, newFreq, num);
            } else {
                addToSet(restSet, newFreq, num);
            }
        }

        rebalance();
    };

    for (let i = 0; i < n; i++) {
        updateElement(nums[i], 1);

        if (i >= k) {
            updateElement(nums[i - k], -1);
        }

        if (i >= k - 1) {
            ans.push(topSum);
        }
    }

    return ans;
};
