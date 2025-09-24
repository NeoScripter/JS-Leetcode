import Queue from 'queue';

/**
 * @param {number} memoryLimit
 */
var Router = function (memoryLimit) {
    this.limit = memoryLimit;
    this.q = new Queue();
    this.seen = new Set();
    this.map = new Map();
};

/**
 * @param {number} source
 * @param {number} destination
 * @param {number} timestamp
 * @return {boolean}
 */
Router.prototype.addPacket = function (source, destination, timestamp) {
    const hash = `${source}-${destination}-${timestamp}`;
    if (this.seen.has(hash)) {
        return false;
    }

    if (this.q.size() === this.limit) {
        const [src, dest, time] = this.q.dequeue();
        const arr = this.map.get(dest);
        arr.shift();
        if (arr.length === 0) {
            this.map.delete(dest);
        }
        this.seen.delete(`${src}-${dest}-${time}`);
    }

    this.q.enqueue([source, destination, timestamp]);
    this.map.set(destination, [
        ...(this.map.get(destination) ?? []),
        timestamp,
    ]);
    this.seen.add(hash);

    return true;
};

/**
 * @return {number[]}
 */
Router.prototype.forwardPacket = function () {
    if (this.q.size() === 0) {
        return [];
    }

    const [src, dest, time] = this.q.dequeue();
    this.seen.delete(`${src}-${dest}-${time}`);
    const arr = this.map.get(dest);
    arr.shift();

    if (arr.length === 0) {
        this.map.delete(dest);
    }

    return [src, dest, time];
};
/**
 * @param {number} destination
 * @param {number} startTime
 * @param {number} endTime
 * @return {number}
 */
Router.prototype.getCount = function (destination, startTime, endTime) {
    if (!this.map.has(destination)) {
        return 0;
    }

    const arr = this.map.get(destination);

    if (arr[0] > endTime || arr[arr.length - 1] < startTime) {
        return 0;
    }

    const bs = (val, type) => {
        let low = 0;
        let high = arr.length - 1;
        let ans = -1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (type === 'lower') {
                if (arr[mid] >= val) {
                    ans = mid;
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            } else {
                if (arr[mid] <= val) {
                    ans = mid;
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }

        return ans;
    };

    let left = bs(startTime, 'lower');
    let right = bs(endTime, 'upper');
    left = left === -1 ? 0 : left;
    right = right === -1 ? arr.length - 1 : right;

    return right - left + 1;
};
