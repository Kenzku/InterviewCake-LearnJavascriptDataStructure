/**
 * Created by huang on 07/04/16.
 * Write a function reverseWords() that takes a string message and reverses the order of the words
 *
 */
const assert = require('assert');
var message = 'find you will pain only go you recordings security the into if';
assert.equal(reverseWords(message), 'if into the security recordings you go only pain will you find');
function reverseWords(message) {
    var messageArray = message.split(' '),
        startIndex = 0,
        lastIndex = messageArray.length - 1,
        tempItem;
    
    while (startIndex < lastIndex) {
        tempItem = messageArray[startIndex];
        messageArray[startIndex] = messageArray[lastIndex];
        messageArray[lastIndex] = tempItem;
        
        startIndex = startIndex + 1;
        lastIndex = lastIndex - 1;
    }
    return messageArray.join(' ');
}