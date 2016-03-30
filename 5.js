/**
 * Created by huang on 26/03/16.
 * Imagine you landed a new job as a cashier...
 * Your quirky boss found out that you're a programmer and has a weird request about something they've been wondering for a long time.
 * Write a function that, given:
 * an amount of money
 * an array of coin denominations
 * computes the number of ways to make amount of money with coins of the available denominations.
 * Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢,2¢ and 3¢), your program would output—the number of ways to make
 * 4¢ with those denominations:
 * 1¢, 1¢, 1¢, 1¢
 * 1¢, 1¢, 2¢
 * 1¢, 3¢
 * 2¢, 2¢
 * https://www.interviewcake.com/question/javascript/coin
 */
var testArray = [2,3,9,27];

assert.equal(changePossibilitiesBottomUp(27,testArray),13);

function changePossibilitiesBottomUp(amount, coinsArray) {
    var waysOfBuildingAmount = [];
    for (var i = 0; i < amount; i = i++) {
        waysOfBuildingAmount[i] = 0;
    }
    waysOfBuildingAmount[0] = 1;
    var coin,
        highestAmount;
    for (var i = 0; i < coinsArray.length; i = i + 1) {
        coin = coinsArray[i];
        for (highestAmount = coin; highestAmount <= amount; highestAmount = highestAmount + 1) {
            /*
             * highestAmount minus the coin, because the new way will contain at least using 1 of this coin
             * waysOfBuildingAmount[highestAmount] on the right refers to the old ways of building the highest amount,
             * i.e without the using this coid as in "highestAmount - coin"
             */
            waysOfBuildingAmount[highestAmount] = waysOfBuildingAmount[highestAmount] + waysOfBuildingAmount[highestAmount-coin];
        }
    }
    return waysOfBuildingAmount[amount];
}

