function buildTree(preorder, inorder) {
    return build(0, inorder.length - 1);
    
    function build(l, r) {
        if (l > r) {
            return null;
        }
        
        var v = preorder.shift();
        var i = inorder.indexOf(v);
        var root = new TreeNode(v);
        
        root.left = build(l, i - 1);
        root.right = build(i + 1, r);
        
        return root;
    }
}
