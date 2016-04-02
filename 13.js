/**
 * Created by huang on 01/04/16.
 * I want to learn some big words so people think I'm smart.
 * I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.
 * Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example:
 * var words = [
 * 'ptolemaic',
 * 'retrograde',
 * 'supplant',
 * 'undulate',
 * 'xenoepist',
 * 'asymptote', // <-- rotates here!
 * 'babka',
 * 'banoffee',
 * 'engender',
 * 'karpatka',
 * 'othellolagkage',
 * ];
 * Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.
 * https://www.interviewcake.com/question/javascript/find-rotation-point
 *
 */
const assert = require('assert');
var testArray = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage'
];
assert.equal(findRotatePoint(testArray), 5);
testArray = [
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    1,// <-- rotates here!
    2,
    3
];

assert.equal(findRotatePoint(testArray), 8);

function findRotatePoint(testArray) {
    if (!testArray || testArray.length === 0) {
        return -1;
    }

    if (testArray.length === 1) {
        return 0;
    }
    var floorIndex = 0,
        ceilingIndex = testArray.length - 1,
        guessPoint,
        halfDistance,
        distance;

    while (floorIndex<ceilingIndex){
        distance = ceilingIndex - floorIndex + 1;
        halfDistance = Math.floor(distance/2);
        guessPoint = floorIndex + halfDistance; // guess a point halfway between floor and ceiling
        if (testArray[guessPoint-1] && testArray[guessPoint+1]) { // middle
           if (testArray[guessPoint-1] > testArray[guessPoint] && testArray[guessPoint] < testArray[guessPoint+1]) {
               return guessPoint; // this is rotate point
           }
        }
        if (!testArray[guessPoint-1] && testArray[guessPoint]) { // left edge
            if (testArray[guessPoint] < testArray[guessPoint+1] && testArray[guessPoint] < testArray[testArray.length-1]) {
                return guessPoint;
            }
        }
        if (!testArray[guessPoint+1] && testArray[guessPoint]) { // right edge
            if (testArray[guessPoint] < testArray[guessPoint-1] && testArray[guessPoint] < testArray[0]) {
                return guessPoint;
            }
        }
        if (testArray[guessPoint] < testArray[floorIndex]) { // on the left hand for guess point, include guess point
            ceilingIndex = guessPoint;
        }
        if (testArray[guessPoint] > testArray[floorIndex]) {
            floorIndex = guessPoint + 1;
        }
    }
}