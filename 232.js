var MyQueue = function () {
    this.q = [];
    this.poped = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.q.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.q.length === this.poped.length) return;

    if (this.poped.length === 0) {
        this.poped.push(0);
        return this.q[0];
    }

    this.poped.push(this.poped.at(-1) + 1);
    return this.q[this.poped.at(-1)];
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.poped.length === 0) {
        return this.q[0];
    }

    return this.q[this.poped.at(-1) + 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.q.length === this.poped.length;
};
