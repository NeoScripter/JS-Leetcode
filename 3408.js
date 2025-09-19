var TaskManager = function (tasks) {
    this.tasks = new Map();
    this.heap = new PriorityQueue((a, b) =>
        a[0] === b[0] ? b[1] - a[1] : b[0] - a[0]
    );

    for (const [userId, taskId, priority] of tasks) {
        this.tasks.set(taskId, { priority, userId });
        this.heap.enqueue([priority, taskId, userId]);
    }
};

/**
 * @param {number} userId
 * @param {number} taskId
 * @param {number} priority
 * @return {void}
 */
TaskManager.prototype.add = function (userId, taskId, priority) {
    this.tasks.set(taskId, { priority, userId });
    this.heap.enqueue([priority, taskId, userId]);
};

/**
 * @param {number} taskId
 * @param {number} newPriority
 * @return {void}
 */
TaskManager.prototype.edit = function (taskId, newPriority) {
    if (!this.tasks.has(taskId)) return;
    const { userId } = this.tasks.get(taskId);
    this.tasks.set(taskId, { priority: newPriority, userId });
    this.heap.enqueue([newPriority, taskId, userId]);
};

/**
 * @param {number} taskId
 * @return {void}
 */
TaskManager.prototype.rmv = function (taskId) {
    this.tasks.delete(taskId);
};

/**
 * @return {number}
 */
TaskManager.prototype.execTop = function () {
    while (this.heap.size() > 0) {
        const [priority, taskId, userId] = this.heap.front();
        const record = this.tasks.get(taskId);
        if (
            !record ||
            record.priority !== priority ||
            record.userId !== userId
        ) {
            this.heap.dequeue();
            continue;
        }
        this.tasks.delete(taskId);
        this.heap.dequeue();
        return userId;
    }
    return -1;
};
