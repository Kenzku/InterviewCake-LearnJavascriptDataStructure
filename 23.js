/**
 * Created by huang on 05/04/16.
 * You have a singly-linked list ↴ and want to check if it contains a cycle.
 * A singly-linked list is built with nodes, where each node has:
 * node.next—the next node in the list.
 * node.data—the data held in the node. For example, if our linked list stores people in line at the movies, node.data might be the person's name.
 * For example:
 *
 * function LinkedListNode(value) {
 *  this.value = value;
 *  this.next = null;
 *  }
 *  A cycle occurs when a node’s next points back to a previous node in the list. The linked list is no longer linear with a beginning and end—instead, it cycles through a loop of nodes.
 *  Write a function containsCycle() that takes the first node in a singly-linked list and returns a boolean indicating whether the list contains a cycle.
 *  https://www.interviewcake.com/question/javascript/linked-list-cycles
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

function containsCycle(head) { // O(n) for both time and space
    var currentNode = head,
        nextNode,
        nodeSet = new Set();
    nodeSet.add(currentNode);
    while(currentNode.next !== null) {
        currentNode = currentNode.next;
        if (nodeSet.has(currentNode)) {
            return true;
        }
        nodeSet.add(currentNode);
    }
    return false;
}