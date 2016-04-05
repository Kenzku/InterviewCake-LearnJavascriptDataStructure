/**
 * Created by huang on 02/04/16.
 */
function fibIterative(n) { // O(n) time O(1) space

    // edge cases:
    if (n < 0) {
        throw new Error('Index was negative. No such thing as a negative index in a series.');
    } else if (n === 0 || n === 1) {
        return n;
    }

    var prev = 0;
    var prevPrev = 1;
    var current = 0;
    for (var x = 0; x < n; x++) {
        current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }

    return current;
}