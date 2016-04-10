/**
 * Created by huang on 10/04/16.
 */
const assert = require('assert');

var testArray = ["Ana", "John", "ana", "john"];

assert.deepEqual(sortArrayLowercaseLater(testArray), ["Ana", "ana", "John", "john"]);

function sortArrayLowercaseLater(unsortedArray) {
    return unsortedArray.sort(function (a, b) {
        if  (a.toLowerCase() < b.toLowerCase()) { // Javascript compare strings using ASCII
            return -1; // notice: return a.toLowerCase() - b.toLowerCase() will not work for strings,as it returns NaN
        }
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }
        return 0;
    });
}

testArray = ['Maève', 'Maeve'];

assert.deepEqual(sortArrayAccentedCharaters(testArray), ["Maeve", "Maève"]);

function sortArrayAccentedCharaters(unsortedArray) {
    return unsortedArray.sort(function (a, b) {
        return a.localeCompare(b)
    });
}