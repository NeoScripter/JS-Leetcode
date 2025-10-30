var numberOfBeams = function (bank) {
    let beams = 0,
        prev = 0;

    for (const row of bank) {
        const lasers = row
            .split('')
            .reduce((sum, item) => sum + Number(item), 0);

        console.log(lasers);
        if (lasers === 0) {
            continue;
        }

        if (prev === 0) {
            prev = lasers;
            continue;
        }

        beams += prev * lasers;
        prev = lasers;
    }

    return beams;
};

numberOfBeams(['011001', '000000', '010100', '001000']);
