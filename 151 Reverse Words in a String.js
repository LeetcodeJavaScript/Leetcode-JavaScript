function reverseWords(str) {
    // reverse the whole string
    var arr = str.split('').reverse();
    
    // exclusive
    var tail = 0;
    
    // reverse each word
    for (var l = 0; l < arr.length; l++) {
        if (arr[l] === ' ') {
            continue;
        }
        
        if (tail > 0) {
            arr[tail++] = ' ';
        }
        
        // find boundary
        // l inclusive
        // r exclusive
        var r = l;
        while (r < arr.length && arr[r] !== ' ') {
            arr[tail++] = arr[r++];
        }
        
        // find length of the word
        var len = r - l;
        
        // reverse word
        reverse(tail - len, tail - 1);
        
        // forward l
        l = r;
    }
    
    return arr.slice(0, tail).join('');
    
    function reverse(l, r) {
        for (; l < r; l++, r--) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
        }
    }
}
