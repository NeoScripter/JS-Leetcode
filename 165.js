import test from './test.js';

var compareVersion = function (version1, version2) {
    let [v1, v2] = [version1.split('.'), version2.split('.')];
    let switched = false;

    if (v1.length < v2.length) {
        [v1, v2] = [v2, v1];
        switched = true;
    }
    for (let i = 0; i < v1.length; i++) {
        const n1 = Number(v1[i]);

        if (i >= v2.length) {
            if (n1 !== 0) {
                return switched ? -1 : 1;
            } else {
                continue;
            }
        }

        const n2 = Number(v2[i]);

        if (n1 > n2) {
            return switched ? -1 : 1;
        } else if (n2 > n1) {
            return switched ? 1 : -1;
        }
    }

    return 0;
};

test('case 1', compareVersion('1.2', '1.10'), -1);
test('case 2', compareVersion('1.01', '1.0001'), 0);
test('case 3', compareVersion('1.0', '1.0.0.0'), 0);
