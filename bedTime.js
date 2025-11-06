import test from './test.js';

const MINUTES_IN_DAY = 24 * 60;

const calcTime = ([alarm, sleep]) => {
    const getSecs = (time) => {
        const [hours, minutes] = time.split(':').map(Number);

        return hours * 60 + minutes;
    };

    const convertToString = (time) => {
        const h = Math.floor(time / 60),
            m = time % 60;

        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    };

    const offset = getSecs(alarm) - getSecs(sleep);

    return convertToString((MINUTES_IN_DAY + offset) % MINUTES_IN_DAY);
};

const bedTime = (...times) => {
    return times.map((time) => calcTime(time));
};
// case 1
test('case 1', bedTime(['07:50', '07:50']), ['00:00']);

// case 2
test(
    'case 2',
    bedTime(["06:15", "10:00"], ["08:00", "10:00"], ["09:30", "10:00"]),
    ["20:15", "22:00", "23:30"]
);

// case 3
test(
    'case 3',
    bedTime(["05:45", "04:00"], ["07:10", "04:30"]),
    ["01:45", "02:40"]
);
