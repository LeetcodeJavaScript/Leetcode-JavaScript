function lowestCommonAncestor(root, p, q) {
    var min = Math.min(p.val, q.val);
    var max = Math.max(p.val, q.val);
    if (root.val > max) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if (root.val < min) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
}
