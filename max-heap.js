
export class MaxHeap {
    constructor() {
        this.h = [];
    }

    push(v) {
        this.h.push(v);
        this.#heapifyUp();
    }

    pop() {
        if (this.h.length === 0) return null;
        if (this.h.length === 1) return this.h.pop();
        const max = this.h[0];
        this.h[0] = this.h.pop();
        this.#heapifyDown();
        return max;
    }

    peek() {
        return this.h.length ? this.h[0] : null;
    }

    size() {
        return this.h.length;
    }

    #heapifyUp() {
        let i = this.h.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.h[p] >= this.h[i]) break;
            [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
            i = p;
        }
    }

    #heapifyDown() {
        let i = 0;
        while (2 * i + 1 < this.h.length) {
            let j = 2 * i + 1;
            if (j + 1 < this.h.length && this.h[j + 1] > this.h[j]) j++;
            if (this.h[i] >= this.h[j]) break;
            [this.h[i], this.h[j]] = [this.h[j], this.h[i]];
            i = j;
        }
    }
}
