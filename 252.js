import test from "./test.js"
/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a.start - b.start);

    for (let i = 1; i < intervals.length; i++) {
        const prev = intervals[i-1];
        const curr = intervals[i];

        if (curr.start > prev.end) {
            return false;
        }
    }

    return true;
}

test("case 1", canAttendMeetings([(0,30),(5,10),(15,20)]), false);
test("case 2", canAttendMeetings([(5,8),(9,15)]), true);
