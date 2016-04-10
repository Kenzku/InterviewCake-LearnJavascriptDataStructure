/**
 * Created by huang on 10/04/16.
 */
var Stack = require('./stack.js'),
    assert = require('assert');

assert.equal(divideBy2(10),'1010');
assert.equal(divideBy2(233),'11101001');

function divideBy2(decNumber){

    var remStack = new Stack(),
        rem,
        binaryString = '';

    while (decNumber > 0){ // while the division result is not zero
        rem = Math.floor(decNumber % 2); // we get the remainder of the division (mod) and push it to the stack
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2); // finally, we update the number that will be divided by 2
    }

    while (!remStack.isEmpty()){ //  we pop the elements from the stack until it is empty
        binaryString += remStack.pop().toString(); // concatenating the elements that were removed from the stack into a string
        // is that binary representation of the decimal
    }

    return binaryString;
}

assert.equal(baseConverter(100345, 2),'11000011111111001');
assert.equal(baseConverter(100345, 8),'303771');
assert.equal(baseConverter(100345, 16),'187F9');

/*
 * Instead of dividing the decimal number by 2,
 * we can pass the desired base as an argument to the method and use it in the divisions,
 * as shown in the following algorithm:
 * In the conversion from decimal to binary, the remainders will be 0 or 1;
 * in the conversion from decimal to octagonal, the remainders will be from 0 to 8,
 * but in the conversion from decimal to hexadecimal, the remainders can be 0 to 8 plus the letters A to F (values 10 to 15).
 * */
function baseConverter(decNumber, base){

    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF'; //but in the conversion from decimal to hexadecimal, the remainders can be 0 to 8 plus the letters A to F (values 10 to 15).

    while (decNumber > 0){
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()){
        baseString += digits[remStack.pop()]; // a way to use ABCDEF
    }

    return baseString;
}
