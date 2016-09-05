function simplifyPath(path) {
    const stack = [];
    const pathes = path.split('/').filter(p => p && p !== '.');
    
    pathes.map(p => {
        if (p === '..') {
            stack.pop();
        } else {
            stack.push(p);
        }
    });
    
    return '/' + stack.join('/');
}
