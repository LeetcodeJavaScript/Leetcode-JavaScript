function closestValue(root, target) {
    var closest = Number.MAX_VALUE;
    
    while (root) {
        if (Math.abs(root.val - target) < Math.abs(closest - target)) {
            closest = root.val;
        }
        
        if (root.val === target) {
            break;
        } else if (root.val > target) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    
    return closest;
}
