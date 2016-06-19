function solution(isBadVersion) {
    return getBadVersion;
    
    function getBadVersion(n) {
        var l = 0;
        var r = n;
        
        // Try to make l and r as the index of first bad version
        // so if mid is bad verion
        // FROM [G (L)] G G G G B B [B (M)] B B [B (R)]
        // TO   [G (L)] G G G G B B [B (R)]
        // 
        // but if mid is good version
        // FROM [G (L)] G [G (M)] G G B B B B B [B (R)]
        // TO               [G (L)] G B B B B B [B (R)]
        
        
        // loop should terminates when l === r
        // NOTE try not to return inside while loop, which make code cleaner and more readable
        while (l < r) {
            var mid = Math.floor((l + r) / 2);
        
            if (isBadVersion(mid)) {
                // r never equals to m
                // so there won't be infinite loop
                
                // keep r in bad version
                r = mid;
            } else {
                
                // try to move l to bad version
                l = mid + 1;
            }
        }
        
        // post loop condition
        // l === r as the index of first bad version
        return l;
    }
}
