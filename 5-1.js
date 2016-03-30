/**
 * Created by huang on 26/03/16.
 */
const assert = require('assert');

var testArray = [1,2,3];

// assert.equal(changePossibilitiesBottomUp(4,testArray),4);

var a = changePossibilitiesBottomUp(27,[2,3,9,27]);

console.log(a);

function changePossibilitiesBottomUp(amount, denominations) {

    // intialize an array of zeros with indices up to amount
    var waysOfDoingNcents = [];
    for (var i = 0; i <= amount; i++) {
        waysOfDoingNcents[i] = 0;
    }
    waysOfDoingNcents[0] = 1; // assume number of ways making amount 0 is 1

    for (var j = 0; j < denominations.length; j++) {
        var coin = denominations[j];
        for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
            var higherAmountRemainder = higherAmount - coin;
            waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
        }
    }

    return waysOfDoingNcents[amount];
}