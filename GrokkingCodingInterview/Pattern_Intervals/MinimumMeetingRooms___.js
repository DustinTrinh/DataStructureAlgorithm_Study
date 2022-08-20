class Meeting {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

const min_meeting_rooms = function (meetings) {
    let meetingRooms = 0;
    let count = 0;
    let s = 0;
    let e = 0;
    let start = [];
    let end = [];
    for (let i = 0; i < meetings.length; i++) {
        start.push(meetings[i].start);
        end.push(meetings[i].end);
    }
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);
    while (s < meetings.length) {
        if (start[s] < end[e]) {
            s++;
            count++;
        } else {
            e++;
            count--;
        }
        meetingRooms = Math.max(meetingRooms, count);
    }
    return meetingRooms;
};

console.log(
    `Minimum meeting rooms required: ${min_meeting_rooms([
        new Meeting(4, 5),
        new Meeting(2, 3),
        new Meeting(2, 4),
        new Meeting(3, 5),
    ])}`
);

console.log(
    `Minimum meeting rooms required: ${min_meeting_rooms([
        new Meeting(1, 4),
        new Meeting(2, 5),
        new Meeting(7, 9),
    ])}`
);
console.log(
    `Minimum meeting rooms required: ${min_meeting_rooms([
        new Meeting(6, 7),
        new Meeting(2, 4),
        new Meeting(8, 12),
    ])}`
);
console.log(
    `Minimum meeting rooms required: ${min_meeting_rooms([
        new Meeting(1, 4),
        new Meeting(2, 3),
        new Meeting(3, 6),
    ])}`
);
console.log(
    `Minimum meeting rooms required: ${min_meeting_rooms([
        new Meeting(4, 5),
        new Meeting(2, 3),
        new Meeting(2, 4),
        new Meeting(3, 5),
    ])}`
);

console.log(`Minimum meeting rooms required: ` +
  `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`);
console.log(`Minimum meeting rooms required: ` +
  `${min_meeting_rooms([new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`);
console.log(`Minimum meeting rooms required: ` +
  `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`);
console.log(`Minimum meeting rooms required: ` +
  `${min_meeting_rooms([new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`);