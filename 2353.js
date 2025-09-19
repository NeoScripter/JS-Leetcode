const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function (foods, cuisines, ratings) {
    this.foodCuisine = new Map();
    this.foodRating = new Map();
    this.cuisineHeap = new Map();

    const makePQ = () =>
        new PriorityQueue((a, b) =>
            a[0] !== b[0] ? b[0] - a[0] : a[1].localeCompare(b[1])
        );

    for (let i = 0; i < foods.length; i++) {
        const f = foods[i],
            c = cuisines[i],
            r = ratings[i];
        this.foodCuisine.set(f, c);
        this.foodRating.set(f, r);

        if (!this.cuisineHeap.has(c)) this.cuisineHeap.set(c, makePQ());
        this.cuisineHeap.get(c).enqueue([r, f]);
    }
};

/**
 * @param {string} food
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
    this.foodRating.set(food, newRating);
    const c = this.foodCuisine.get(food);
    this.cuisineHeap.get(c).enqueue([newRating, food]);
};

/**
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
    const heap = this.cuisineHeap.get(cuisine);
    while (this.foodRating.get(heap.front()[1]) !== heap.front()[0]) {
        heap.dequeue();
    }
    return heap.front()[1];
};
