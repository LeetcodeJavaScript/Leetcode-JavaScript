function Queue() {
    var input = [];
    var output = [];
    
    return {
        push, pop, peek, empty
    };
    
    function push(x) {
        input.push(x);
    }
    
    function pop() {
        peek();
        
        return output.pop();
    }
    
    function peek() {
        if (!output.length) {
            while (input.length) {
                output.push(input.pop());
            }
        }
        
        return output[output.length - 1];
    }
    
    function empty() {
        return (input.length + output.length) === 0;
    }
}
