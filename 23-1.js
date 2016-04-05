/**
 * Created by huang on 05/04/16.
 */
function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode(5);
var b = new LinkedListNode(1);
var c = new LinkedListNode(9);
var e = new LinkedListNode(10);
var f = new LinkedListNode(15);

a.next = b;
b.next = c;
c.next = e;
e.next = f;
f.next = c;

var a1 = new LinkedListNode(5);
var b1 = new LinkedListNode(1);
var c1 = new LinkedListNode(9);
var e1 = new LinkedListNode(10);
var f1 = new LinkedListNode(15);

a1.next = b1;
b1.next = c1;
c1.next = e1;
e1.next = f1;
f1.next = null;

const asset = require('assert');

asset.equal(containsCycle(a), true);
asset.equal(containsCycle(a1), false);

function containsCycle(head) { // O(n) for time and O(1) space
    var slowRunner = head,
        fastRunner = head;
    while(fastRunner.next !== null) {
        fastRunner = fastRunner.next.next;
        slowRunner = slowRunner.next;
        if (fastRunner === slowRunner) {
            return true;
        }
    }
    return false;
}