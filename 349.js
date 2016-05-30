function intersection(nums1, nums2) {
    var set = new Set(nums1);
    return [...new Set(nums2.filter(n2 => set.has(n2)))];
}
