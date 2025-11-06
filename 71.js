var simplifyPath = function (path) {
    const arr = path.split('/');
    const stack = [];

    for (const dir of arr) {
        if (dir === '' || dir === '.') continue;

        if (dir === '..') {
            if (stack.length >= 1) {
                stack.pop();
            }
            continue;
        }

        stack.push(dir);
    }

    return '/' + stack.join('/');
};
