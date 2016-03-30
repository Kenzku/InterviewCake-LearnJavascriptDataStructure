/**
 * Created by huang on 25/03/16.
 * Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available
 * To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with attributes startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.
 *
 * For example:
 * {startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
 * {startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm
 * Write a function condenseMeetingTimes() that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * For example, given:
 * [
 * {startTime: 0,  endTime: 1},
 * {startTime: 3,  endTime: 5},
 * {startTime: 4,  endTime: 8},
 * {startTime: 10, endTime: 12},
 * {startTime: 9,  endTime: 10},
 * ]
 *
 * your function would return:
 *
 * [
 * {startTime: 0, endTime: 1},
 * {startTime: 3, endTime: 8},
 * {startTime: 9, endTime: 12},
 * ]
 *
 * Do not assume the meetings are in order. The meeting times are coming from multiple teams.
 *
 * In this case the possibilities for startTime and endTime are bounded by the number of 30-minute slots in a day. But soon you plan to refactor HiCal to store times as Unix timestamps (which are big numbers). Write something that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges.
 * https://www.interviewcake.com/question/javascript/merging-ranges
 */

const assert = require('assert');

var testArray = [
    {startTime: 11, endTime: 12},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 0,  endTime: 1},
    {startTime: 9,  endTime: 10}
];
assert.deepEqual([
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 10},
    {startTime: 11, endTime: 12}
],condenseMeetingTimes(testArray));

testArray = [
    {startTime: 10, endTime: 12},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 0,  endTime: 1},
    {startTime: 9,  endTime: 10}
];
assert.deepEqual([
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12}
],condenseMeetingTimes(testArray));

testArray = [
    {startTime: 1, endTime: 12},
    {startTime: 1,  endTime: 5},
    {startTime: 1,  endTime: 8},
    {startTime: 1,  endTime: 1},
    {startTime: 1,  endTime: 10}
];
assert.deepEqual([
    {startTime: 1, endTime: 12}
],condenseMeetingTimes(testArray));


function condenseMeetingTimes(testArray) {
    var condensedMeetingTime = [];
    // sort the test array
    testArray = testArray.sort(function (a, b) {
        return a.startTime - b.startTime;
    });
    for (var i = 0; i < testArray.length; ) {
        if (!testArray[i+1]) {
            condensedMeetingTime.push(testArray[i]);
            break;
        }
        if (testArray[i].endTime >= testArray[i+1].startTime) {
            testArray.splice(i,2,{startTime: testArray[i].startTime, endTime: Math.max(testArray[i].endTime, testArray[i+1].endTime)});
        } else {
            condensedMeetingTime.push({startTime: testArray[i].startTime, endTime: testArray[i].endTime});
            i = i + 1;
        }
    }
    if (condensedMeetingTime.length === 0) {
        return testArray;
    }
    return condensedMeetingTime;
}

// standard answer
function mergeRanges(meetings) {

    // sort by start times, breaking ties with end times
    var sortedMeetings = meetings.slice().sort(function(a, b) {
        return a.startTime > b.startTime ? 1 : -1;
    });

    // meetings only go in mergedMeetings when we're sure they can't be merged further
    var mergedMeetings = [];

    var firstMeeting = sortedMeetings[0];
    var previousMeetingStart = firstMeeting.startTime,
        previousMeetingEnd   = firstMeeting.endTime;

    for (var i = 1; i < sortedMeetings.length; i++) {
        var currentMeeting = sortedMeetings[i];

        // if the previous meeting can be merged with the current one
        // that is, if current meeting starts before previous meeting ends:
        if (currentMeeting.startTime <= previousMeetingEnd) {

            // merge the current_meeting back into the previous_meeting
            // and keep the resulting meeting as the previous_meeting
            // because this newly-merged meeting might still
            // need to be merged with the next meeting
            previousMeetingEnd = Math.max(currentMeeting.endTime, previousMeetingEnd);

            // else the previous meeting can't be merged with anything else
        } else {

            // put it in mergedMeetings
            // and move on to trying to merge the current meeting into subsequent meetings
            mergedMeetings.push({startTime: previousMeetingStart, endTime: previousMeetingEnd});
            previousMeetingStart = currentMeeting.startTime;
            previousMeetingEnd   = currentMeeting.endTime;
        }
    }

    // put last meeting we were trying to merge in our final set
    mergedMeetings.push({startTime: previousMeetingStart, endTime: previousMeetingEnd});

    return mergedMeetings;
}