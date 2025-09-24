import { PriorityQueue } from '@datastructures-js/priority-queue';
/*
 * @param {number} n
 * @param {number[][]} entries
 */
var MovieRentingSystem = function (n, entries) {
    this.movieToShops = new Map();
    this.unrentedShopMovieToPrice = new Map();
    this.rentedShopMovieToPrice = new Map();

    this.rentedMoviesHeap = new PriorityQueue(
        (a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]
    );

    for (const [shop, movie, price] of entries) {
        if (!this.movieToShops.has(movie)) {
            this.movieToShops.set(
                movie,
                new PriorityQueue((a, b) => {
                    if (a[0] !== b[0]) return a[0] - b[0];
                    return a[1] - b[1];
                })
            );
        }
        this.movieToShops.get(movie).enqueue([price, shop]);

        const key = `${shop}-${movie}`;
        this.unrentedShopMovieToPrice.set(key, price);
    }
};

/**
 * @param {number} movie
 * @return {number[]}
 */
MovieRentingSystem.prototype.search = function (movie) {
    const shops = this.movieToShops.get(movie);
    if (!shops) return [];

    const unique = new Set();
    const tmp = [];

    while (shops.size() > 0 && unique.size < 5) {
        const [price, shop] = shops.dequeue();
        const key = `${shop}-${movie}`;
        if (!this.unrentedShopMovieToPrice.has(key)) continue;

        unique.add(shop);
        tmp.push([price, shop]);
    }

    tmp.forEach((item) => shops.enqueue(item));
    this.movieToShops.set(movie, shops);
    return [...unique];
};

/**
 * @param {number} shop
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.rent = function (shop, movie) {
    const key = `${shop}-${movie}`;
    const price = this.unrentedShopMovieToPrice.get(key);
    this.unrentedShopMovieToPrice.delete(key);
    this.rentedShopMovieToPrice.set(key, price);
    this.rentedMoviesHeap.enqueue([price, shop, movie]);
};

/**
 * @param {number} shop
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.drop = function (shop, movie) {
    const key = `${shop}-${movie}`;
    const price = this.rentedShopMovieToPrice.get(key);

    this.rentedShopMovieToPrice.delete(key);
    this.unrentedShopMovieToPrice.set(key, price);

    this.movieToShops.get(movie).enqueue([price, shop]);
};

/**
 * @return {number[][]}
 */
MovieRentingSystem.prototype.report = function () {
    const unique = new Set();
    const tmp = [];

    while (this.rentedMoviesHeap.size() > 0 && unique.size < 5) {
        const [price, shop, movie] = this.rentedMoviesHeap.dequeue();
        const key = `${shop}-${movie}`;
        if (!this.rentedShopMovieToPrice.has(key)) continue;
        unique.add(key);
        tmp.push([price, shop, movie]);
    }

    tmp.forEach((item) => this.rentedMoviesHeap.enqueue(item));

    return [...unique].map((e) => e.split('-').map((d) => Number(d)));
};
