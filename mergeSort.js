/**
 * Created by huang on 20/03/16.
 */
const assert = require('assert');
var testArray = [4,7,5,6,2,9,3,8,1];

assert.deepEqual(mergeSort(testArray), [1,2,3,4,5,6,7,8,9]);

function mergeSort(data) {
    if (data.length < 2) {
        return data;
    }
    var midPoint = Math.round(data.length / 2);
    console.log(midPoint);
    var left = mergeSort(data.slice(0, midPoint));
    var right = mergeSort(data.slice(midPoint));
    return merge(left, right);
}

function merge(left, right) {
    var out = [];

    while (left.length && right.length) {
        out.push(left[0] < right[0] ? left.shift() : right.shift())
    }

    while (left.length) {
        out.push(left.shift());
    }

    while (right.length) {
        out.push(right.shift());
    }
    console.log(out);
    return out;
}