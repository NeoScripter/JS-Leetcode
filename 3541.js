var maxFreqSum = function (s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const count = new Map();
    let v = 0,
        c = 0;

    for (const char of s) {
        count.set(char, (count.get(char) ?? 0) + 1);

        if (vowels.has(char)) {
            v = Math.max(v, count.get(char));
        } else {
            c = Math.max(c, count.get(char));
        }
    }

    return v + c;
};
