function twoSum(nums, target) {
    var map = {};
    
    for (var i = 0; i < nums.length; i++) {
        var curr = nums[i];
        var rest = target - curr;
        
        if (map[rest] !== undefined) {
            return [map[rest], i];
        }
        
        map[curr] = i;
    }
}
