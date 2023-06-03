//This is the lesson I had today about building Binary Search Trees. 
class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        if(!this.root) {
            this.root = node;
            return;
        }
        
        let parentTree = this.root;
        while(true) {
            if(node.data < parentTree.data) {
                if(!parentTree.left) {
                    parentTree.left = node;
                    break;
                }
                else {
                    parentTree = parentTree.left;
                }
            }
            if (node.data > parentTree.data) {
                if (!parentTree.right) {
                    parentTree.right = node;
                    break;
                }
                else {
                    parentTree = parentTree.right;
                }
            }
        }
    }
//This part was a bit tricky. I will come back to this to learn more about it and quiz myself more. 
    hasNode(data) {
        return this.searchRoot(this.root, data)
    }

    searchRoot(root, data) {
        if(!root) {
            return false;
        }
        if(root.data === data) {
            return true;
        }
        if(root.data > data) {
            return this.searchRoot(root.left, data);
        }
        if(root.data < data) {
            return this.searchRoot(root.right, data);
        }
    }
}

module.exports = Tree;