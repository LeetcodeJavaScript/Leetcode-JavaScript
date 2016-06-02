function twoSum(nums, target) {
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        let rest = target - curr;
        
        if (map[rest] !== undefined) {
            return [map[rest], i];
        }
        
        map[curr] = i;
    }
}
