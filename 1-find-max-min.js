/**
 * Created by huang on 21/03/16.
 * Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
 * For example:
 * var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
 * getMaxProfit(stockPricesYesterday);
 * returns 6 (buying for $5 and selling for $11)
 * No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
 * indices of the array refers to the time in minutes
 * https://www.interviewcake.com/question/javascript/stock-price
 */
const assert = require('assert');

var testArray = [10, 7, 5, 8, 11, 9];

assert.equal(findBestPrice(testArray), 6, 'true');

var testArray = [10,10,10,10,10];

assert.equal(findBestPrice(testArray), 0);

var testArray = [10,9,8,7,6];

assert.equal(findBestPrice(testArray), -1);

var testArray = [10];

assert.equal(findBestPrice(testArray), -1);

var testArray = [4, 10];

assert.equal(findBestPrice(testArray), 6);

var testArray = [10,21];

assert.equal(findBestPrice(testArray), 11);

function findBestPrice(stockPricesYesterday) {

    // make sure we have at least 2 prices
    if (stockPricesYesterday.length < 2) {
       return -1;
    }

    // we'll greedily update minPrice and maxProfit, so we initialize
    // them to the first price and the first possible profit
    var minPrice = stockPricesYesterday[0];
    var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

    // start at the second (index 1) time
    // we can't sell at the first time, since we must buy first,
    // and we can't buy and sell at the same time!
    // if we started at index 0, we'd try to buy /and/ sell at time 0.
    // this would give a profit of 0, which is a problem if our
    // maxProfit is supposed to be /negative/--we'd return 0!
    for (var i = 1; i < stockPricesYesterday.length; i++) {
        var currentPrice = stockPricesYesterday[i];

        // see what our profit would be if we bought at the
        // min price and sold at the current price
        var potentialProfit = currentPrice - minPrice;

        // update maxProfit if we can do better
        maxProfit = Math.max(maxProfit, potentialProfit);

        // update minPrice so it's always
        // the lowest price we've seen so far
        minPrice = Math.min(minPrice, currentPrice);
    }

    return maxProfit;
}