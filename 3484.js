/**
 * @param {number} rows
 */
var Spreadsheet = function (rows) {
    this.sheet = Array.from({ length: 26 }, () =>
        Array.from({ length: rows }, () => 0)
    );
};

/**
 * @param {string} cell
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function (cell, value) {
    const col = cell.charCodeAt(0) - 65;
    const row = cell.substring(1) - 1;

    this.sheet[col][row] = value;
};

/**
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function (cell) {
    const col = cell.charCodeAt(0) - 65;
    const row = cell.substring(1) - 1;

    this.sheet[col][row] = 0;
};

/**
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function (formula) {
    formula = formula.substring(1).split('+');
    let sum = 0;

    for (let val of formula) {
        if (isNaN(val)) {
            const col = val.charCodeAt(0) - 65;
            const row = val.substring(1) - 1;

            if (col >= this.sheet.length || row >= this.sheet[0].length) {
                continue;
            }

            sum += this.sheet[col][row];
        } else {
            sum += Number(val);
        }
    }

    return sum;
};
