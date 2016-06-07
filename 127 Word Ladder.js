function ladderLength(beginWord, endWord, wordList) {
    var src = new Set([beginWord]);
    var dst = new Set([endWord]);
    var len = 1;
    
    while(src.size && dst.size) {
        if (src.size > dst.size) {
            [src, dst] = [dst, src];
        }
        
        var newSet = new Set();
        
        for (var curr of src) {
            var arr = curr.split('');
            
            for (var i = 0; i < curr.length; i++) {
                for (var j = 0; j < 26; j++) {
                    arr[i] = String.fromCharCode(97 + j);
                    
                    var next = arr.join('');
                    
                    if (dst.has(next)) {
                        return len + 1;
                    }
                    
                    if (wordList.has(next)) {
                        newSet.add(next);
                        wordList.delete(next);
                    }
                    
                    arr[i] = curr[i];
                }
            }
        }
        
        len += 1;
        src = newSet;
    }
    
    return 0;
}
