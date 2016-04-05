/**
 * Created by huang on 02/04/16.
 */
const assert = require('assert');

assert.equal(fib(0),0);
assert.equal(fib(1),1);
assert.equal(fib(6),8);
assert.equal(fib(12),144);
function Fibber() {
    this.memo = {};
}

Fibber.prototype.fib = function(n) { // O(n) time and O(n) space

    // edge case: negative index
    if (n < 0) {
        throw new Error('Index was negative. No such thing as a negative index in a series.');
    }

    // base case: 0 or 1
    else if (n === 0 || n === 1) {
        return n;
    }

    // see if we've already calculated this
    if (this.memo.hasOwnProperty(n)) {
        return this.memo[n];
    }

    var result = this.fib(n-1) + this.fib(n-2); // e.g. to get f(5) The computer will build up a call stack with fib(5), fib(4), fib(3), fib(2),fib(1)

    // memoize
    this.memo[n] = result; // e.g. the second time reach f(3), it will get f(3) from memo, because f(4) has calculated f(3)

    return result;
};