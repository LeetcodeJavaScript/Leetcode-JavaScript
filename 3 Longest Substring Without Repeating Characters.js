function lengthOfLongestSubstring(s) {
    const map = {};
    // inclusive
    let left = 0;
    
    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}
