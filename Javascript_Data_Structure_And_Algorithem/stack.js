/**
 * Created by huang on 10/04/16.
 * https://www.safaribooksonline.com/library/view/learning-javascript-data/9781783554874/ch03.html
 */
function Stack() {

    var items = [];

    this.push = function(element){
        items.push(element);
    };

    this.pop = function(){
        return items.pop();
    };

    this.peek = function(){
        return items[items.length-1];
    };

    this.isEmpty = function(){
        return items.length == 0;
    };

    this.size = function(){
        return items.length;
    };

    this.clear = function(){
        items = [];
    };

    this.print = function(){
        console.log(items.toString());
    };
}
/**
 * how to use stack
 * @type {Stack}

var stack = new Stack();
console.log(stack.isEmpty()); //outputs true

stack.push(5);
stack.push(8);

console.log(stack.peek()); // outputs 8

stack.push(11);
console.log(stack.size()); // outputs 3
console.log(stack.isEmpty()); //outputs false

stack.push(15);

stack.pop();
stack.pop();
console.log(stack.size()); // outputs 2
stack.print(); // outputs [5, 8]
 */

module.exports = Stack;