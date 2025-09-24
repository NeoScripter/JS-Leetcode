import Queue from './queue.js';
import test from './test.js';

var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;

    wordList.push(beginWord);

    const edges = new Map();

    for (let i = 0; i < wordList.length; i++) {
        for (let j = i + 1; j < wordList.length; j++) {
            const [w1, w2] = [wordList[i], wordList[j]];

            if (!differsByOne(w1, w2)) continue;

            edges.set(w1, [w2, ...(edges.get(w1) ?? [])]);
            edges.set(w2, [w1, ...(edges.get(w2) ?? [])]);
        }
    }

    const seen = new Set();
    const q = new Queue();
    q.enqueue([beginWord, 1]);

    while (!q.isEmpty()) {
        let [word, dist] = q.dequeue();

        if (word === endWord) return dist;

        if (seen.has(word)) continue;

        seen.add(word);

        const children = edges.get(word);

        for (const child of children) {
            q.enqueue([child, dist + 1]);
        }
    }

    return 0;
};

function differsByOne(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    if (str1 === str2) {
        return false;
    }

    let missed = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            missed++;

            if (missed > 1) {
                return false;
            }
        }
    }

    return true;
}

test(
    'case 1',
    ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']),
    5
);

test(
    'case 2',
    ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']),
    0
);
