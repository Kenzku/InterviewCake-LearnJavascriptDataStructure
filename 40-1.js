/**
 * Created by huang on 20/03/16.
 *  We have an array of integers, where:
 * The integers are in the range 1..n
 * The array has a length of n+1
 * It follows that our array has at least one integer which appears at least twice.
 * But it may have several duplicates, and each duplicate may appear more than twice.
 *
 * Write a function which finds any integer that appears more than once in our array.
 *
 * We're going to run this function on our new, super-hip Macbook Pro With Retina Display™.
 * Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM. So we need to optimize for space!
 * https://www.interviewcake.com/question/javascript/find-duplicate-optimize-for-space
 *
 *
 * return when find any duplicated
 */
const assert = require('assert');
var testArray = [1,2,3,4,5,5];

assert.equal(findDuplicate(testArray), 5);

testArray = [2,2,3,4,5,6,7,3];

assert.equal(findDuplicate(testArray), 2);

testArray = [1,2,3,4,4,5,6,7,3];

assert.equal(findDuplicate(testArray), 3);

testArray = [7,7,4,4,4,5,6,7,3,8];

assert.equal(findDuplicate(testArray), 4);

testArray = [];

assert.equal(findDuplicate(testArray), -1);

testArray = [1];

assert.equal(findDuplicate(testArray), -1);

// standard answer
function findRepeat(theArray) {

    var floor = 1;
    var ceiling = theArray.length - 1;

    while (floor < ceiling) {

        // divide our range 1..n into an upper range and lower range
        // (such that they don't overlap)
        // lower range is floor..midpoint
        // upper range is midpoint+1..ceiling
        var midpoint = Math.floor(floor + ((ceiling - floor) / 2));
        var lowerRangeFloor   = floor;
        var lowerRangeCeiling = midpoint;
        var upperRangeFloor   = midpoint + 1;
        var upperRangeCeiling = ceiling;

        var distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;

        // count number of items in lower range
        var itemsInLowerRange = 0;
        theArray.forEach(function(item) {

            // is it in the lower range?
            if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
                itemsInLowerRange += 1;
            }
        });

        if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {

            // there must be a duplicate in the lower range
            // so use the same approach iteratively on that range
            floor   = lowerRangeFloor;
            ceiling = lowerRangeCeiling;
        } else {

            // there must be a duplicate in the upper range
            // so use the same approach iteratively on that range
            floor   = upperRangeFloor;
            ceiling = upperRangeCeiling;
        }
    }

    // floor and ceiling have converged
    // we found a number that repeats!
    return floor;
}