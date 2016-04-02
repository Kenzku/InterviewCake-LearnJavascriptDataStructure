/**
 * Created by huang on 01/04/16.
 * standard answer
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
function findRotatePoint(words) {
    const firstWord = words[0];

    var floorIndex = 0;
    var ceilingIndex = words.length - 1;

    while (floorIndex < ceilingIndex) {

        // guess a point halfway between floor and ceiling
        var guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

        // if guess comes before first word
        if (words[guessIndex] > firstWord) {
            // go right
            floorIndex = guessIndex;
        } else {
            // go left
            ceilingIndex = guessIndex;
        }

        // if floor and ceiling have converged
        if (floorIndex + 1 === ceilingIndex) {

            // between floor and ceiling is where we flipped to the beginning
            // so ceiling is alphabetically first
            break;
        }
    }

    return ceilingIndex;
}