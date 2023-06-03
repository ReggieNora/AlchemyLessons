//Building the node class gave us the code we needed to refer to in tree.js
//This constructor provides to skeleton for the node. 
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        
    }
}

module.exports = Node;