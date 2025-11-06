var decodeString = function (s) {
    let match = s.match(/(\d+)\[(.+?)\]/);
    while (match) {
        const replacement = match[2].repeat(Number(match[1]));
        s = s.replace(/\d+\[.+?\]/, replacement);
        match = s.match(/(\d+)\[(.+?)\]/);
    }

    return s;
};

const s = '2[abc]3[cd]ef';

console.log(decodeString(s));
