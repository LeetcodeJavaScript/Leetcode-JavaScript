function twoSum(nums, target) {
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        const rest = target - v;
        
        if (map[rest] !== undefined) {
            return [map[rest], i];
        }
        
        map[v] = i;
    }
}
