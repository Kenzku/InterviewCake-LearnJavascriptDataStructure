/**
 * Created by huang on 10/04/16.
 */
const assert = require('assert');

var testArray = ["Ana", "John", "ana", "john"];

assert.deepEqual(sortArrayLowercaseLater(testArray), ["Ana", "ana", "John", "john"]);

function sortArrayLowercaseLater(unsortedArray) {
    return unsortedArray.sort(function (a, b) {
        if  (a.toLowerCase() < b.toLowerCase()) { // use
            return -1; // notice: return a.toLowerCase() - b.toLowerCase() will not work for strings,as it returns NaN
        }
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }
        return 0;
    });
}