function LRUCache(capacity) {
    var cache = {};
    var arr = [];
    
    return {
        get: get,
        set: set
    };
    
    function get(k) {
        if (!cache[k]) {
            return -1;
        }
        
        var idx = arr.indexOf(k);
        arr.splice(idx, 1);
        arr.unshift(k);
        
        return cache[k];
    }
    
    function set(k, v) {
        if (cache[k]) {
            cache[k] = v;
            get(k);
            return;
        }
        
        if (arr.length === capacity) {
            cache[arr.pop()] = undefined;
        }
        arr.unshift(k);
        
        cache[k] = v;
    }
}
