/**
 * Created by huang on 06/04/16.
 *
 * You have a linked list ↴ and want to find the kth to last node (i.e. the node has the distance of k to the last node.
 * Write a function kthToLastNode() that takes an integer k and
 * the headNode of a singly linked list, and returns the
 * kth to last node in the list.
 * https://www.interviewcake.com/question/javascript/kth-to-last-node-in-singly-linked-list
 */
function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");
var f = new LinkedListNode("Jere's best");
var g = new LinkedListNode("Glue");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

const assert = require('assert');

assert.deepEqual(findKthToLastNode(3,a),e); // e,f,g 3 nodes, g is the last node

function findKthToLastNode(k, head) {
    var nodeMap = new Map(),
        current = head,
        kthToLastNode;
    while (current!=null) {
        nodeMap.set(current,0);
        nodeMap.forEach(function (value, key, map) {
            map.set(key, value+1);
        });
        current = current.next;
    }
    nodeMap.forEach(function (value, key, map) {
        if (value === k) {
            kthToLastNode = key;
        }
    });
    return kthToLastNode;
}