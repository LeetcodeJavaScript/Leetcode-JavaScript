function Stack() {
    var queue = [];
    
    return {
        push,
        pop,
        top,
        empty
    };
    
    function push(x) {
        queue.unshift(x);
        
        for (var i = 0; i < queue.length - 1; i++) {
            queue.unshift(queue.pop());
        }
    }
    
    function pop() {
        return queue.pop();
    }
    
    function top() {
        return queue[queue.length - 1];
    }
    
    function empty() {
        return queue.length === 0;
    }
}
