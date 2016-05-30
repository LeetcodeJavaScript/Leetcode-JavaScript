function convert(s, numRows) {
    var arr = Array(numRows).fill({}).map(r => []);
    
    s.split('').forEach((ch, i) => arr[findRow(i)].push(ch));
    
    return arr.map(chs => chs.join('')).join('');
    
    function findRow(n) {
        if (numRows === 1) {
            return 0;
        }
        
        var idx = n % (2 * numRows - 2);
        
        return idx < numRows ? idx : 2 * numRows - 2 - idx;
    }
}
