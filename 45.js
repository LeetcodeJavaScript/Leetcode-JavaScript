function jump(nums) {
    var max = 0;
    var nextMax = 0;
    var jumps = 0;
    
    for (var i = 0; i < nums.length; i++) {
        nextMax = Math.max(i + nums[i], nextMax);
        
        if (i === max && max !== nums.length - 1) {
            max = nextMax;
            jumps++;
        }
    }
    
    return jumps;
}
