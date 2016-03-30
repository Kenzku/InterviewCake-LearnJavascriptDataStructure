/**
 * Created by huang on 19/03/16.
 * Each order is represented by an "order id" (an integer).
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a function to merge our arrays of orders into one sorted array.
 * https://www.interviewcake.com/question/javascript/merge-sorted-arrays
 */
var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

myArray     = [3, 4, 6, 10, 11, 15];
alicesArray = [1, 5, 8, 12];

console.log(mergeArrays(myArray, alicesArray));

myArray     = [3, 4, 6, 10];
alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));

myArray     = [];
alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));

myArray     = [3, 4, 6, 10];
alicesArray = [];

console.log(mergeArrays(myArray, alicesArray));

// the key is always to compare the first item of the array
function mergeArrays(myArray, alicesArray) {
    var returnArray = [];
    for (var i = 0; i < (myArray.length < alicesArray.length ? myArray.length : alicesArray.length);) {
        if (myArray[i] < alicesArray[i]) {
            returnArray.push(myArray.splice(i, 1)[0]);
        } else {
            returnArray.push(alicesArray.splice(i, 1)[0]);
        }
    }
    if (myArray.length > 0) {
        returnArray = returnArray.concat(myArray);
    } else if (alicesArray.length > 0) {
        returnArray = returnArray.concat(alicesArray);
    }
    return returnArray;
}

// website answers
function mergeArrays_2(myArray, alicesArray) {

    var mergedArray = [];

    var currentIndexAlices = 0;
    var currentIndexMine   = 0;
    var currentIndexMerged = 0;

    while (currentIndexMerged < (myArray.length + alicesArray.length)) {

        // case: my array is exhausted
        if (currentIndexMine >= myArray.length) {
            mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
            currentIndexAlices++;

            // case: alices array is exhausted
        } else if (currentIndexAlices >= alicesArray.length) {
            mergedArray[currentIndexMerged] = myArray[currentIndexMine];
            currentIndexMine++;

            // case: my item is next
        } else if (myArray[currentIndexMine] < alicesArray[currentIndexAlices]) {
            mergedArray[currentIndexMerged] = myArray[currentIndexMine];
            currentIndexMine++;

            // case: alices item is next
        } else {
            mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
            currentIndexAlices++;
        }

        currentIndexMerged++;
    }

    return mergedArray;
}