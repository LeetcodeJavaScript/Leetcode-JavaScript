function solution(isBadVersion) {
    return getBadVersion;
    
    function getBadVersion(n) {
        var l = 0;
        var r = n;
        
        while (l < r) {
            var mid = Math.floor((l + r) / 2);
        
            if (isBadVersion(mid)) {
                // r never equals m
                // so there won't be infinite loop
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        
        // postcondition
        // l === r as the first bad version
        return l;
    }
}
