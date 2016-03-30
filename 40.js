/**
 * Created by huang on 20/03/16.
 * Find a duplicate, Space Edition™.
 * We have an array of integers, where:
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
 */
const assert = require('assert');

var testArray = [1,2,3,4,5,5];

assert.deepEqual(findDuplicate(testArray), [5]);

testArray = [2,2,3,4,5,6,7,3];

assert.deepEqual(findDuplicate(testArray), [2,3]);

testArray = [1,2,3,4,4,5,6,7,3];

assert.deepEqual(findDuplicate(testArray), [3,4]);

testArray = [7,7,4,4,4,5,6,7,3,8];

assert.deepEqual(findDuplicate(testArray), [4,7]);

testArray = [];

assert.deepEqual(findDuplicate(testArray), []);

testArray = [1];

assert.deepEqual(findDuplicate(testArray), []);

function findDuplicate(testArray) {
    var newArrayLength = testArray.length,
        newArray = [],
        resultArray = [];

    for (var i = 0; i < newArrayLength; i = i + 1) {
        newArray[i] = 0;
    }

    for (var i = 0; i < newArrayLength; i = i + 1) {
        newArray[testArray[i]] += 1;
    }

    for (var i = 0; i < newArrayLength; i = i + 1) {
        if (newArray[i] > 1) {
            resultArray.push(i);
        }
    }
    return resultArray;
}
