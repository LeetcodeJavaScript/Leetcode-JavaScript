function longestPalindrome(s) {
    var res = '';
    
    for (var i = 0; i < s.length; i++) {
        traverse(i, i); 
        traverse(i, i + 1);
    }
    
    return res;
    
    function traverse(l, r) {
        // l and r are exclusive
        while (s[l] && s[r] && s[l] === s[r]) {
            l--;
            r++;
        }
        if (r - l - 1 > res.length) {
            res = s.slice(l + 1, r);
        }
    }
}
