/**
 * Created by huang on 02/04/16.
 */
const assert = require('assert');

assert.equal(fib(0),0);
assert.equal(fib(1),1);
assert.equal(fib(6),8);
assert.equal(fib(12),144);

function fib(nTh) { // O(n^2), as duplicated calculation
    if (nTh === 0) {
        return 0;
    }
    if (nTh === 1) {
        return 1;
    }
    return fib(nTh-1) + fib(nTh-2);
}