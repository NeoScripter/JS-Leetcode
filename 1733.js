import test from './test.js';

var minimumTeachings = function (n, languages, friendships) {
    const langMap = new Map();
    const needTeaching = new Set();

    for (let [f1, f2] of friendships) {
        if (!intersect(languages[f1 - 1], languages[f2 - 1])) {
            for (let user of [f1, f2]) {
                for (let lang of languages[user - 1]) {
                    langMap.set(
                        lang,
                        (langMap.get(lang) ?? new Set()).add(user)
                    );
                }
                needTeaching.add(user);
            }
        }
    }

    let maxCount = 0;
    for (let users of langMap.values()) {
        maxCount = Math.max(maxCount, users.size);
    }

    return needTeaching.size - maxCount;
};

function intersect(arr1, arr2) {
    for (let item of arr1) {
        if (arr2.includes(item)) {
            return true;
        }
    }
    return false;
}

test(
    'case 1',
    minimumTeachings(
        2,
        [[1], [2], [1, 2]],
        [
            [1, 2],
            [1, 3],
            [2, 3],
        ]
    ),
    1
);
test(
    'case 2',
    minimumTeachings(
        3,
        [[2], [1, 3], [1, 2], [3]],
        [
            [1, 4],
            [1, 2],
            [3, 4],
            [2, 3],
        ]
    ),
    2
);
