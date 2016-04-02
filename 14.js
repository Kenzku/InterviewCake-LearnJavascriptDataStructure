/**
 * Created by huang on 02/04/16.
 * Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.
 * Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.
 * When building your function:
 * Assume your users will watch exactly two movies
 * Don't make your users watch the same movie twice
 * Optimize for runtime over memory
 * https://www.interviewcake.com/question/javascript/inflight-entertainment
 */
const assert = require('assert');

var testArray = [6,5,4,3,2,1];

assert.equal(canFindTwoNumbers(7, testArray), true);

testArray = [6,5,4,3,2,1];

assert.equal(canFindTwoNumbers(8, testArray), true);

testArray = [6,15,4,3,21,10];

assert.equal(canFindTwoNumbers(8, testArray), false);


function canFindTwoNumbers(number, testArray) {
    // sort
    testArray.sort(function (a, b) {
        return a - b;
    });

    // search
    for (var i = 0; i < testArray.length; i = i + 1) { // O(n)
        var floorIndex = -1,
            ceilingIndex = testArray.length,
            distance,
            halfDistance,
            guessIndex;

        while (floorIndex + 1 < ceilingIndex) { // O(lgn)
            distance = ceilingIndex - floorIndex;
            halfDistance = Math.floor(distance/2);
            guessIndex = floorIndex + halfDistance;

            if (testArray[guessIndex] === number - testArray[i]) { // hit the second number
                if (guessIndex !== i) {
                    return true;
                } else {
                    return false; // as only 2 movies
                }
            }

            if (testArray[guessIndex] < number - testArray[i]) {
                floorIndex = guessIndex;
            }

            if (testArray[guessIndex] > number - testArray[i]) {
                ceilingIndex = guessIndex;
            }
        }
    }
    return false;
}