function canJump(nums) {
    var max = 0;
    
    for (var i = 0; i <= max && i < nums.length; i++) {
        max = Math.max(max, i + nums[i]);
    }
    
    return max >= nums.length - 1;
}
