function intersect(nums1, nums2) {
    var map = {};
    var res = [];
    
    nums1.forEach(n => map[n] = (map[n] || 0) + 1);
    nums2.forEach(n => {
       if (map[n]) {
           map[n]--;
           res.push(n);
       } 
    });
    
    return res;
}
