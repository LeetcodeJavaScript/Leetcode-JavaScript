function inorderTraversal(root) {
    var stack = [];
    var res = [];
    
    while (stack.length || root) {
        if (root) {
            stack.push(root);
            root = root.left;
            continue;
        }
        
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    
    return res;
}
