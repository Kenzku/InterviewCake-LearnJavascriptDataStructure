/**
 * Created by huang on 02/04/16.
 * Write a function fib() that a takes an integer n
 * and returns the nth fibonacci ↴ number.
 *
 * Let's say our fibonacci series is 0-indexed and starts with 0. So
 * fib(0); // => 0
 * fib(1); // => 1
 * fib(2); // => 1
 * fib(3); // => 2
 * fib(4); // => 3
 * ...
 *
 * https://www.interviewcake.com/question/javascript/nth-fibonacci
 */

const assert = require('assert');

assert.equal(fib(0),0);
assert.equal(fib(1),1);
assert.equal(fib(6),8);
assert.equal(fib(12),144);
function fib(nTh) {
    var fibArray = [0,1],
        sum = 0;
    if (nTh === 0 || nTh === 1) {
        return fibArray[nTh];
    }
    for (var i = 2; i <= nTh; i = i + 1) {
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }
    return fibArray[nTh];
}