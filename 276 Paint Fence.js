function numWays(n, k) {
    var prev = 0; 
    var curr = n > 0 ? k : 0;
    
    while (--n > 0) {
        var tmp = curr;
        curr = (curr + prev) * (k - 1);
        prev = tmp;
    }
    
    return curr + prev;
}
