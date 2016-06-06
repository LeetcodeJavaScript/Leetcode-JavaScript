function closestValue(root, target) {
    var min = Number.MAX_VALUE;
    search(root);
    return min;
    
    function search(n) {
        if (!n) {
            return;
        }
        
        if (Math.abs(n.val - target) < Math.abs(min - target)) {
            min = n.val;
        }
        
        if (n.val < target) {
            search(n.right);
        } else if (n.val > target) {
            search(n.left);
        } else {
            return;
        }
    }
}
