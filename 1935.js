var canBeTypedWords = function (text, brokenLetters) {
    const broken = new Set(brokenLetters);
    let count = 0;

    for (const word of text.split(' ')) {
        let valid = true;
        for (const char of word) {
            if (broken.has(char)) {
                valid = false;
                break;
            }
        }

        if (valid) {
            count++;
        }
    }

    return count;
};
