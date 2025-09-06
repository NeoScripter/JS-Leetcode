function minMeetingRooms(intervals) {
    if (intervals.length === 0) {
        return 0;
    }

    const starts = intervals.map((i) => i.start).sort((a, b) => a - b);
    const ends = intervals.map((i) => i.end).sort((a, b) => a - b);

    let max = 0;
    let count = 0;
    let i = 0,
        j = 0;

    while (i < starts.length) {
        if (starts[i] < ends[j]) {
            count++;
            i++;
        } else {
            count--;
            j++;
        }
        max = Math.max(max, count);
    }

    return max;
}
