var StockSpanner = function () {
    this.stocks = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    let span = 1;

    while (this.stocks.length >= 1 && this.stocks.at(-1)[0] <= price) {
        span += this.stocks.pop()[1];
    }

    this.stocks.push([price, span]);

    return span;
};
