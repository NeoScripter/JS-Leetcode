import test from './test.js';

var multiply = function (num1, num2) {
    const add = (n1, n2) => {
        const ans = [];

        let i = n1.length - 1,
            j = n2.length - 1,
            c = 0;

        while (i >= 0 || j >= 0 || c > 0) {
            const d1 = i >= 0 ? Number(n1[i]) : 0;
            const d2 = j >= 0 ? Number(n2[j]) : 0;

            const sum = d1 + d2 + c;
            c = Math.floor(sum / 10);

            ans.push((sum % 10).toString());
            j--;
            i--;
        }

        while (i >= 0) {
            ans.push(n1[i]);
            i--;
        }
        while (j >= 0) {
            ans.push(n2[j]);
            j--;
        }

        return ans.reverse().join('');
    };

    let res = '0';

    if (num1.length < num2.length) {
        [num1, num2] = [num2, num1];
    }

    for (let i = num2.length - 1; i >= 0; i--) {
        const digit = Number(num2[i]);
        let partial = '0';

        for (let j = 0; j < digit; j++) {
            partial = add(partial, num1);
        }

        partial += '0'.repeat(num2.length - 1 - i);

        res = add(res, partial);
    }

    return res;
};

test('case 1', multiply('2', '3'), '6');
test('case 2', multiply('123', '456'), '56088');
