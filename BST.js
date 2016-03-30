/**
 * Created by huang on 29/03/16.
 * Learning JavaScript Data Structures and Algorithms
 * Original author: Loiane Groner
 * Publisher: Packt Publishing
 * https://www.safaribooksonline.com/library/view/learning-javascript-data/9781783554874/
 */
function BinarySearchTree() {

    var Node = function(key) { // represent each node of the tree
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null; // In the case of a tree, instead of the head, we have the root

    // ----------insertion----------
    /**
     * this.function will be exposed to users
     * @param key
     */
    this.insert = function (key) {
        var newNode = new Node(key); // represent the new node

        if (root === null) { // if the node we are trying to add is the first one in the tree
            root = newNode;
        } else { // add a node to a different position than the root
            insertNode(root,newNode);
        }

    }

    /**
     * private helper
     */
    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) { // If the node's key is less than the current node key, check the left child of the node
            if (node.left === null) { // If there is no left node
                node.left = newNode; // then we insert the new node there
            } else {
                insertNode(node.left, newNode); // If not, we need to descend a level in the tree by calling insertNode recursively
                // In this case, the node we will be comparing next time will be the left child of the current node.
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    // ----------traversal----------
    /**
     * An in-order traversal visits all the nodes of a BST in ascending order,
     * meaning it visits the nodes from the smallest to largest.
     * An application of in-order traversal would be to sort a tree.
     * left <= middle <= right, traverse from small to big
     * @param callback
     */
    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root, callback); // Visitor Pattern: callback function can be used to perform the action we would like to execute when the node is visited
    };
    /**
     * private helper
     */
    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) { //this is the point where the recursion stops being executed
            inOrderTraverseNode(node.left, callback);  // left
            callback(node.key);                        // middle
            inOrderTraverseNode(node.right, callback); // right
        }
    };
    /**
     * A pre-order traversal visits the node prior to its descendants.
     * An application of pre-order traversal could be to print a structured document.
     * order: middle, left, right
     * @param callback
     */
    this.preOrderTraverse = function(callback){
        preOrderTraverseNode(root, callback);
    };

    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key); // The difference between the in-order and the pre-order is that the pre-order will visit the node first
            preOrderTraverseNode(node.left, callback); // left
            preOrderTraverseNode(node.right, callback); // right
        }
    };
    /**
     * A post-order traversal visits the node after it visits its descendants.
     * An application of post-order could be computing the space used by a file in a directory and its subdirectories
     *
     * left, right, middle
     * @param callback
     */
    this.postOrderTraverse = function(callback){
        postOrderTraverseNode(root, callback);
    };

    var postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback); // left
            postOrderTraverseNode(node.right, callback); // right
            callback(node.key); // middle
        }
    };

    // ----------search----------

    this.min = function() {
        return minNode(root);
    };
    /**
     * private method: The minNode method allows us to find the minimum key from any node of the tree
     * the left-most node in the last level of tree is the lowest key from this tree.
     * @param node
     * @returns {*}
     */
    var minNode = function (node) {
        if (node){
            while (node && node.left !== null) { // we will traverse the left edge of the tree
                node = node.left;                // until we find the node at the highest level of the tree (left end).
            }

            return node.key;
        }
        return null;
    };

    this.max = function() {
        return maxNode(root);
    };
    /**
     * private method: for the maximum value, we will always navigate to the right side of the tree.
     * @param node
     * @returns {*}
     */
    var maxNode = function (node) {
        if (node){
            while (node && node.right !== null) { // we will traverse the right edge of the tree
                node = node.right;                // until we find the last node at the right end of the tree.
            }

            return node.key;
        }
        return null;
    };

    /**
     * Search any key
     * The first thing is to declare the search method.
     * Following the pattern of other methods declared for our BST,
     * we use a helper function to help us
     * @param key
     */
    this.search = function(key){
        return searchNode(root, key);
    };
    /**
     * The searchNode method can be used to find a specific key in the tree or any of its subtrees.
     * @param node
     * @param key
     * @returns {boolean}
     */
    var searchNode = function(node, key){

        if (node === null){ // validate that the node passed as parameter is valid
            return false;
        }
        if (key < node.key){ // If the key we are looking for is lower than the current node
            return searchNode(node.left, key); // then we will continue the search using the left child subtree

        } else if (key > node.key){ // If the value we are looking for is greater than the current node
            return searchNode(node.right, key); // then we continue the search from the right child of the current node

        } else {
            return true; // Otherwise, it means the key we are looking for is equal to the current node's key, and we return true to indicate we found the key
        }
    };

    // ----------remove----------
    this.remove = function(key){
        root = removeNode(root, key); // One thing very important to note is that the root receives the return of the method removeNode.
    };

    var removeNode = function(node, key){

        if (node === null){ // If the node we are analyzing is null, it means the key does not exist in the tree, and for this reason, we return null.
            return null;
        }
        if (key < node.key){ // if the key we are looking for has a lower value than the current node
            node.left = removeNode(node.left, key); // then we go to the next node at the left edge of the tree
            return node; // return the updated node

        } else if (key > node.key){ // If the key is greater than the current node
            node.right = removeNode(node.right, key); // then we will go the next node at the right edge of the tree; and updating the pointer values of the left pointer of the node
            return node; // return the updated node

        } else { // key is equal to node.key - we find the key we are looking for

            //case 1 - a leaf node
            if (node.left === null && node.right === null){ // a leaf node that does not have a left or right child
                node = null; // In this case, all we have to do is get rid of this node by assigning null to it
                return node; // assigning null to the node is not enough and we also need to take care of the pointers.
                             // In this case, the node does not have any children,
                             // but it has a parent node. We need to assign null to its parent node and this can be done by returning null
            }

            //case 2 - a node with only 1 child
            if (node.left === null){ // it has only right child
                node = node.right; // we change the reference of the node to its right child i.e. the current node is removed, and replaced by its right child.
                return node; // return the updated node i.e. the right child.

            } else if (node.right === null){ // it has only left child
                node = node.left; // update the node reference to its left child, i.e. the current node is replaced by the left child
                return node; // return the updated node
            }

            //case 3 - a node with 2 children
            var aux = findMinNode(node.right); // Once we find the node we want to remove, we need to find the minimum node from its right edge subtree
            node.key = aux.key; // Then, we update the value of the node with the key of the minimum node from its right subtree.
                                // With this action, we are replacing the key of the node, which means it was removed
            node.right = removeNode(node.right, aux.key); // However, now we have two nodes in the tree with the same key and this cannot happen.
                                                          // What we need to do now is remove the minimum node from the right subtree,
                                                          // since we moved it to the place of the removed node
            return node; // return the updated node reference to its parent
        }
        
        var findMinNode = function (node) {
            return minNode(root);
        }
    };
}
// testing functions and calls
var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

function printNode(value){ // create a callback function
    console.log(value);
}
// tree.inOrderTraverse(printNode); //call the inOrderTraverse method passing our callback function as a parameter

// tree.preOrderTraverse(printNode); // pre-order

// tree.postOrderTraverse(printNode); // post-order

// console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');

// console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');