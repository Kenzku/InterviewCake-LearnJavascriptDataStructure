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

function kthToLastNode(k, head) {

    // STEP 1: get the length of the list
    // start at 1, not 0
    // else we'd fail to count the head node!
    var listLength = 1;
    var currentNode = head;

    // traverse the whole list,
    // counting all the nodes
    while (currentNode.next) {
        currentNode = currentNode.next;
        listLength += 1;
    }
    // if k is greater than the length of the list, there can't
    // be a kth-to-last node, so we'll return an error!
    if (k > listLength) {
        throw new Error('k is larger than the length of the linked list!');
    }
    // STEP 2: walk to the target node
    // calculate how far to go, from the head,
    // to get to the kth to last node
    const howFarToGo = listLength - k;

    currentNode = head;
    for (var x = 0; x < howFarToGo; x++) {
        currentNode = currentNode.next;
    }

    return currentNode;
}

