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
f.next = null;

const assert = require('assert');

assert.deepEqual(reverseSinglyLinkedList(a), f);

function reverseSinglyLinkedList(head) {
    var currentNode = head,
        nextNode = null,
        previousNode = null;
    while (currentNode) {
        // copy a pointer to the next element
        // before we overwrite current.next
        nextNode = currentNode.next;

        currentNode.next = previousNode; // reverse the linked list by setting the next node to the previous node
        previousNode = currentNode; // previous node is the current node

        currentNode = nextNode;
    }
    return previousNode;
}