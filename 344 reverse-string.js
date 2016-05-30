function reverseString(s) {
    var arr = s.split('');
    var len = arr.length;
    var half = len >> 1;
    
    for (var i = 0; i < half; i++) {
        var tmp = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = tmp;
    }
    
    return arr.join('');
}
