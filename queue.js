export default class Queue {
    constructor() {
        this.items = {}; // Stores the queue elements
        this.headIndex = 0; // Pointer to the front of the queue
        this.tailIndex = 0; // Pointer to the rear of the queue
    }

    // Adds an element to the rear of the queue
    enqueue(element) {
        this.items[this.tailIndex] = element;
        this.tailIndex++;
    }

    // Removes and returns the element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return undefined; // Or throw an error
        }
        const removedElement = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return removedElement;
    }

    // Returns the element at the front of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.headIndex];
    }

    // Returns the number of elements in the queue
    size() {
        return this.tailIndex - this.headIndex;
    }

    // Checks if the queue is empty
    isEmpty() {
        return this.size() === 0;
    }

    // Clears all elements from the queue
    clear() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
}
