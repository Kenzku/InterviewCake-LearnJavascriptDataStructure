/**
 * Created by huang on 06/04/16.
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

    var leftNode  = head;
    var rightNode = head;

    // move rightNode to the kth node
    for (var x = 0; x < k - 1; x++) {
        // but along the way, if a rightNode doesn't have a next,
        // then k is greater than the length of the list and there
        // can't be a kth-to-last node! we'll raise an error
        if (!rightNode.next) {
            throw new Error('k is larger than the length of the linked list!');
        }

        rightNode = rightNode.next;
    }

    // starting with leftNode on the head,
    // move leftNode and rightNode down the list,
    // maintaining a distance of k between them,
    // until rightNode hits the end of the list
    while (rightNode.next) {
        leftNode  = leftNode.next;
        rightNode = rightNode.next;
    }

    // since leftNode is k nodes behind rightNode,
    // leftNode is now the kth to last node!
    return leftNode;
}