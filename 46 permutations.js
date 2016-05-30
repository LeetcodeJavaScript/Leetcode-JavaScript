function permute(nums) {
    var used = []; // []bool
    var res = []; // [][]number
    var prefix = []; // []number
    
    traverse();
    
    return res;
    
    function traverse() {
        if (prefix.length === nums.length) {
            return res.push(prefix.slice());
        }
        nums.forEach((v, i) => {
            if (used[i]) {
                return;
            }
            used[i] = true;
            prefix.push(v);
            traverse();
            prefix.pop();
            used[i] = false;
        });
    }
}
